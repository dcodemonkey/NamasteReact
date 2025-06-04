/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>Namaste React</h1>
 *      <h2>Namaste React</h2>
 *  </div>
 
 * </div>
 *
 */

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement("h1", {}, "I'm h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1", {}, "I'm h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        )
    ]
);

// JSX



const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React element to the root
// root.render(heading);
root.render(parent);
