import  React, {useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { EditExpense, NewExpense,DeleteExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

export default ({ expense, setIsEditing }) => {
  const descriptions = [
    'Groceries',
    'Credit Card',
    'Student Loans',
    'Gas',
    'Eating Out',
  ];

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create a new expense
          NewExpense(dispatch, { description: description, amount: Number(amount) });
        } else {
          //edit expense
          EditExpense(dispatch,{id:expense.id, description: description, amount: Number(amount)});
          setIsEditing(false);
        }
      }}
    >
      
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <br />
        </Col>
        <div style={{ marginTop: 'auto' }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button style={{ marginRight: '2px' }} variant="danger" onClick={() => DeleteExpense(dispatch,expense)}>
                Delete
              </Button>
              <Button
                style={{ marginRight: '2px' }}
                variant="success"
                type="submit"
              >
                Save
              </Button>
              <Button
                style={{ marginRight: '2px' }}
                variant="default"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};
