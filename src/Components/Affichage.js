import React from "react";
class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.fetchData();
  }
  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1> Fetch data from an api in react </h1>
        {items.map((item) =>
          item.userId === 1 && item.completed === true ? (
            <div>
              <input type="checkbox" id="tachefaite" checked />
              <label for="tache"> {item.title} </label>
            </div>
          ) : item.userId === 1 && item.completed === false ? (
            <div>
              <input type="checkbox" id="tacheNonFaite" />
              <label for="tache"> {item.title} </label>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}
export default Affichage;
