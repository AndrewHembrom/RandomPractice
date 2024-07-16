# React Jargon

## React Components
- They are the building blocks of react application.
- Two main types -> functional component and Class component
- **Functional Component** -> Simple functions that return JSX (Javascript XML), basically simple sort of static html,css,javascript code. THey take inputs called props.
- Functional component code example
```
function MyComponent() {
  return <div>Hello, World!</div>;
}
```
- **Class Component** -> More advanced form of functional component as it can do more complex things like keeping track of the data that can change over time (state).
- Class component code example
```
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
```

## React State
- State is like a special variable that React keeps track of for you. It lets your component remember things even when it’s updated. For example, a counter that keeps track of how many times a button is clicked
- **Functional Components with State**
```
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // count is the state variable, setCount is the function to update it

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
- **Class Components with State**
```
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}

	render() {
		return (
			<div>
				<p>You clicked {this.state,count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1})}>Click me</button>
			</div>
		);
	}
}
```

## React Rerendering
- Rerendering is when React updates the UI to match the latest data. 
- This happens automatically when State Changes or Props Change.
- **State Changes**: When the special variable (state) changes, React knows it needs to update the screen.
- **Props Change**: When the inputs (props) to a component change, React updates that component.

### Summary
- **Components**: Think of these like building blocks for your app.
- **State**: Special variables that let components remember things.
- **Rerendering**: Automatically updating the screen when state or props change.
