import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardButton, FlexGrid, GridColumn, Card, Buttons } from "./shared/comps";

const H2 = styled.h2`
  text-align:center;
  font-weight:bold;
  font-size:30px;
` 

export default function ShowCategories(props) {
  return (
    <div>
      <H2> Categories</H2>
      <FlexGrid>
        {props.categories.map((category) => (
          <React.Fragment key={category.id}>
            <GridColumn>
              <Card>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                <Buttons>
                  <CardButton
                    onClick={() => {
                      props.history.push(`/categories/${category.id}/edit`);
                    }}
                  >
                    Edit
                  </CardButton>
                  <CardButton
                    onClick={() => {
                      props.handleCategoryDelete(
                        props.currentUser.id,
                        category.id
                      );
                    }}
                  >
                    Delete
                  </CardButton>
                </Buttons>
              </Card>
            </GridColumn>
          </React.Fragment>
        ))}
      </FlexGrid>
      <Link to="/categories/new">
        <button>Create A Category</button>
      </Link>
    </div>
  );
}
