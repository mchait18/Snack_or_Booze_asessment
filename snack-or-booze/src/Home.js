import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <CardText>There are {snacks.length} Snacks and {drinks.length} Drinks on the Menu</CardText>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
