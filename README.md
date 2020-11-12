# Bob's Burger of the Day (BOTD)

For this assessment you will be building a simple `app` that will help Bob collect new `Burger of the Day` ideas. Then he and anyone with access to the site will be able to vote on the BOTD ideas with either a simple `upvote` or `downvote`. We don't care how many times they vote.

When Bob & team likes a BOTD idea, double clicking the BOTD `card` should update the record in the `API` as approved and change the display text to green.

## Requirements

We will be looking at how you structure your `app`, your `React` knowledge, your CSS and UI/UX, and to get a feeling for your overall JavaScript skill. We also have a couple of small features we'd like to see implemented:

- Sorting BOTDs by creation date (default), name, votes, and approved status
- New burgers should go to the top of the list and reset the sort to `Created`
- Paging, no more than four BOTDs per page
- Sorting should be taken into consideration when paging and searching
- Please persist (POST or PATCH) changes to the API described below

This `app` was bootstrapped with `create-react-app`, and using `React` is required. Feel free to use any additional libraries you'd like.

You can find a wireframe for the app in the `wireframes/` directory. Feel free to use the wireframe to layout your `app`. If you are feeling creative, you could also come up with your own layout!

**Bonus Points For:**

- React Hooks
- Styled Components
- Unit Tests

## Getting Started

Starting the `BOTD App` is easy:

```
npm install
npm start
```

Starting the App will kick off two processes: the React App and a simple API. The API is powered by [json-server](https://github.com/typicode/json-server). You can refer to `json-server`'s documentation for updating, deleting and creating records. The `API` is intentionally sluggish, so be sure to take that into account when working on your project.

Make sure that your `app` persists new burgers and votes to the `API`.

**The webserver can be found at:**

- [http://localhost:3000](http://localhost:3000)

**The API endpoint can be found at:**

- [http://localhost:3001/burgers](http://localhost:3001/burgers)
