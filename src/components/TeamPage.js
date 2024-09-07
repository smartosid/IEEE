import React from "react";
import styled from "styled-components";
import members from "../lib/team";
import { ReactComponent as NameCard } from "../components/TeamNameCard.svg";

const Title = styled.section`
  color: #343a40;
  font-size: 22pt;
  font-weight: 800;
  text-align: center;
  margin: 2rem 0;
  position: relative;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 8rem;
    margin: 0 0.5em;
    vertical-align: middle;
    border-bottom: 2px solid #343a40;
  }

  @media screen and (max-width: 900px) {
    font-size: 20pt;
    text-align: left;

    &:before {
      all: unset;
    }
    &:after {
      width: 10rem;
      margin: 0 0.25em;
    }
  }

  @media screen and (max-width: 720px) {
    font-size: 18pt;
    &:before {
      all: unset;
    }
    &:after {
      width: 8rem;
      margin: 0 0.25em;
    }
  }

  @media screen and (max-width: 640px) {
    font-size: 18pt;
    text-align: center;

    &:before,
    &:after {
      all: unset;
    }
  }

  @media screen and (max-width: 490px) {
    font-size: 16pt;
    &:before,
    &:after {
      all: unset;
    }
  }
`;

const GridContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  place-items: stretch center;
  grid-gap: 2rem;
  gap: 2rem;
`;

const Card = styled.section`
  position: relative;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .name {
      font-size: 18pt;
      font-family: "Roboto", sans-serif;
      color: #002447;
      font-weight: 400;
    }

    .role {
      font-size: 14pt;
      font-family: "Proza Libre", sans-serif;
      color: #003e7a;
    }

    @media screen and (max-width: 490px) {
      .name {
        font-size: 16pt;
      }

      .role {
        font-size: 13pt;
      }
    }
  }
`;

const TeamPage = () => {
  return (
    <>
      <main className="teamPage">
        <div className="text-center" style={{ paddingTop: "4rem" }}>
          <a
            href="https://ieeesrmist.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignContent: "center" }}
          >
            <img
              src={require("./Asset 2.png")}
              alt="IEEE SRMIST SB"
              style={{ maxWidth: 75, marginBottom: 10 }}
            />
          </a>
        </div>
        <h2 style={{ fontFamily: "Roboto", textAlign: "center" }}>
          IEEE SRM Administration Committee Recruitment 2021-2022
        </h2>

        <h4 className="text-center gradient-text">Results are out!</h4>

        {Object.keys(members).map((domain) => (
          <>
            <Title> {domain} </Title>
            <GridContainer>
              {members[domain].map((item) => {
                return (
                  <Card>
                    <NameCard style={{ width: "100%", height: "100%" }} />
                    <div className="details">
                      <div className="name"> {item.name} </div>
                      <div className="role"> {item.role} </div>
                    </div>
                  </Card>
                );
              })}
            </GridContainer>
          </>
        ))}
      </main>
      <footer
        className="text-center p-3"
        style={{
          backgroundColor: "#0E0E0E",
          color: "white",
          marginTop: "2rem",
        }}
      >
        Innovate. Edify. Experience. Excel.
      </footer>
    </>
  );
};

export default TeamPage;
