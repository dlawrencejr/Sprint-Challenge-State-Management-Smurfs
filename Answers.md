1. What problem does the context API help solve? 
Makes passing variables to child components easier.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions hold data for the store, reducers are functions used to return data, store is where our state is held.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application occurs globally while component is localized. Uses for either would be when the state is being shared across multiple componenets.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk allows the fuctionality of handling async actions while allowing action-creators to return functions and not the actions.
5. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux is tricky but exhilerating once you get it down. Complex API is easier to use globally. Making it easier to implement in larger projects that work with multiple people.