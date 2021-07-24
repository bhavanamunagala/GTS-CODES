import React  from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import axios from 'axios';  
import { useState, useEffect } from 'react' 
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function CustomToggle({ children, eventKey, handleClick }) {

  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });


  return (
    <div className="card-header" type="button"
     onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const Collapser = () => {
  const [activeKey, setActiveKey] = useState(false);
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/employer_notification');  
      setActiveKey(result.activeKey);  
 };  
 GetData();  
 }, []);  


  const data = [
    { name: "mike", age: 22 },
    { name: "clive", age: 25 },
    { name: "morgan", age: 82 }
  ];
  return (
    <div>
        
         
    
    
      <Accordion defaultActiveKey={0} 
      activeKey={activeKey}>
        {data.map((item, index) => (
          <Card key={index}>
            <CustomToggle
              as={Card.Header}
              eventKey={index}
              handleClick={() => {
                if (activeKey === index) {
                  setActiveKey(null);
                } else {
                  setActiveKey(index);
                }
              }}
            >
              {item.name}
              {activeKey === index ? "-": "+"}
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.age}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default Collapser;
