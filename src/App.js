import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuotesDetails from "./Pages/QuotesDetails";
import MainNavigation from "./nav/MainNavigation";

function App() {
  const DUMMY_QUOTES = [
    {
      id: "q1",
      quote:
        "We cannot solve problems with the kind of thinking we employed when we came up with them.",
      author: "Albert Einstein",
    },
    {
      id: "q2",
      quote:
        "Learn as if you will live forever, live like you will die tomorrow.",
      author: "Mahatma Gandhi",
    },
    {
      id: "q3",
      quote:
        "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
      author: "Walter Anderson",
    },
    {
      id: "q4",
      quote: "Success usually comes to those who are too busy looking for it.",
      author: "Henry David Thoreau",
    },
    {
      id: "q5",
      quote: "There is no CTRL + Z in our life.",
      author: "Pratyusha Saha",
    },
  ];
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes quoteList={DUMMY_QUOTES} />
        </Route>
        <Route path="/quotes/:quotesId">
          <QuotesDetails quoteList={DUMMY_QUOTES} />
        </Route>
        <Route path="/new-quotes">
          <NewQuotes quoteList={DUMMY_QUOTES} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
