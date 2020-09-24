/*
import React from "react";
import styled from "@emotion/styled";

const MainContainer = styled.main`
  display: flex;
  position: fixed;
  width: 100vw;
  .Section {
    h2 {
      color: var(--font-color-white);
    }

    ul {
      display: flex;

      li.Item {
        position: relative;
        width: 108px;
        height: 93px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .Title {
        }
        .Date {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 30px;
          height: 30px;
          background-color: white;
          border-radius: 4px;
          text-align: center;
          .Weekday {
          }
          .Day,
          .Month {
            color: orange;
          }
        }
      }
    }
  }
`;

const Item = ({ title }) => {
  return (
    <li className="Item">
      <div className="Date">
        <span className="Weekday"></span>
        <span className="Day"></span>
        <span className="Month"></span>
      </div>
      <div className="Title">{title}</div>
    </li>
  );
};

const Section = ({ title, items }) => {
  return (
    <section className="Section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => {
          return <Item {...item} />;
        })}
      </ul>
    </section>
  );
};

export default function Main({ children }) {
  return (
    <MainContainer>
      <Section
        title="Next tastings"
        items={[
          { title: "Riesling with Pete" },
          { title: "Riesling with Pete" },
        ]}
      />
      <Section
        title="For your taste"
        items={[
          { title: "Riesling with Pete" },
          { title: "Riesling with Pete" },
        ]}
      />
    </MainContainer>
  );
}
*/
