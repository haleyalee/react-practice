import React, {useState} from 'react';

import './Kanban.css';

function Kanban() {

  const initialCards = {pending: [], inProgress: [], complete: []}

  const [cards, setCards] = useState(initialCards);
  const [editCard, setEditCard] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const columns = [
    {name: "Pending", cards: cards.pending},
    {name: "In Progress", cards: cards.inProgress},
    {name: "Complete", cards: cards.complete}
  ]

  // Triggers modal view to pop up - either Add a Card or Edit Card
  const showModal = (type, card=null) => {
    if (type === 'add') {
      setShowAddModal(true);
      setShowEditModal(false)
    } else if (type === 'edit') {
      setEditCard(card);
      setShowEditModal(true);
      setShowAddModal(false);
    }
  }

  // Upon submit of Add a Card
  const handleAdd = (origCard, newCard) => {
    origCard = {
      id: Math.random() * 1000,
      value: newCard.value,
      status: newCard.status
    }
    const cardsCopy = {...cards}
    cardsCopy[origCard.status] = [...cardsCopy[origCard.status], origCard]
    setCards(cardsCopy)
    setShowAddModal(false);
  }

  // Upon submit of Edit Card
  const handleEdit = (origCard, newCard) => {
    let status = origCard.status;
    const cardsCopy = {...cards}
    const idx = cardsCopy[status].indexOf(origCard);
    if (newCard.value !== origCard.value) {
      cardsCopy[status][idx].value = newCard.value;
    }
    if (newCard.status !== status) {
      cardsCopy[status].splice(idx, 1);
      status = newCard.status;
      cardsCopy[status] = [...cardsCopy[status], newCard]
    }
    setCards(cardsCopy)
    setEditCard({});
    setShowEditModal(false);
  }

  return (
    <div id="kanban" className={(showAddModal || showEditModal) ? 'blur' : ''}>
      {showAddModal && <Modal header={'Add New Card'} handleClose={handleAdd} card={{id: 0, value: '', status: 'pending'}}/>}
      {showEditModal && <Modal header={'Edit Card'} handleClose={handleEdit} card={editCard} />}
      
      <header>
        <h3>My Board</h3>
        <button id="add-btn" onClick={() => showModal('add')}>+ Add New Card</button>
      </header>

      <div id="board">
        {columns.map((col) => 
          <Column key={col.name} header={col.name} cards={col.cards} showModal={showModal}/> 
        )}
      </div>
    </div>
  )
}

export default Kanban;

// Modal View Component (Add a Card and Edit Card)
const Modal = (props) => {
  const {header, card, handleClose} = props;
  const [value, setValue] = useState(card.value);
  const [status, setStatus] = useState(card.status);
  
  return (
    <div className="modal">
      <form onSubmit={(e) => {e.preventDefault(); handleClose(card, {id: card.id, value: value, status: status})}}>
        <header className="modal-header"><h3>{header}</h3></header>
        <div className="modal-body">
          <input 
            type="text" 
            placeholder="enter task" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div className="modal-footer">
          <input type="submit" value={header} />
        </div>
      </form>
    </div>
    
  )
}

// Column Component (Pending, In Progress, Complete)
const Column = (props) => {
  const {header, cards, showModal} = props;

  return (
    <div className="col">
      <h4>{header}</h4>
      <div>
        {cards.map((card) => 
          <Card key={card.id} card={card} showModal={showModal}/>
        )}
      </div>
    </div>
  )
}

const Card = (props) => {
  const {card, showModal} = props;

  return (
    <div className="card" onClick={() => showModal('edit', card)} >
      <p>{card.value}</p>
    </div>
  )
}
