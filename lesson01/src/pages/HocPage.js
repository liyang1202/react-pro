import React, { Component } from "react";

const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

function Child(props) {
  return <div>Child</div>;
}

@foo
class Child2 extends Component {
  render() {
    return (
      <div>Child2</div>
    );
  }
}

export default HocPage;

const Foo = foo(Child);

class HocPage extends Component {
  render() {
    return (
      <div>
        <div>HocPage</div>
        <Foo />
        <Child2 />
      </div>
    );
  }
}

export default HocPage;

