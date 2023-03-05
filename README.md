# Project 1 - The Better PokeAPI™️


## youtube demo
https://youtu.be/1ecP_259jFA

## Description
Create a backend that abstracts some aspects and combines features of the PokeAPI. For instance, an endpoint that just gets the name, image, and type of a specific Pokemon. 

## Submission
- Send the link to the repo containing your code in the #gt-bootcamp-dev Slack channel (there will be a thread for this later)
- Create a less than 3 minute video walkthrough of your API

## Requirements
- Must accurately represent the demo
- Must use Next.js
- Must have specified endpoints
- Must use the free PokeAPI

### API Endpoints
**Subject to change -> may add more endpoints if ya'll think this is too easy**.

All API endpoints should exist in the `pages/api` folder of your Next.js project. This means all api routes will be prefixed with `/api` (helpful for testing).

```http
GET /
```
- returns the name, sprite, and type of random Pokemon

```http
GET /pokemon/:name
```
- returns the name, sprite, and type of a certain Pokemon

```http
GET /types/:type
```
- returns a list of Pokemon of this type

```http
GET /evolve/:name
```
- returns the next evolution step for a specified Pokemon. If the Pokemon is fully evolved, return the current evolution stage

```http
GET /experience/:name?level={level_num}
```
- calculates and returns the experience a Pokemon has based on its name and level.
- level is passed into the the request as a **query** parameter
- See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Experience) for info on growth rates and experience 

```http
POST /battle
```
- Body of the request
	- `pokemon1` - the name of the first Pokemon to be battled (String)
	- `pokemon2` - the name of the second Pokemon to be battled (String)
- `pokemon1` and `pokemon2` are name strings sent in the **body** of the post request. Returns the pokemon with the higher base stat. 

```http
POST /catch
```
- Returns whether a Pokemon is caught based on the its HP. Assume that a regular Poke Ball is used. Assume that the capture method follows the algorithms in Generation I.
- Capture Algorithm (Generation I)
	- Generate a random integer between $[1, 255]$ called $N$
	- Generate a random integer between $[1, 255]$ called $BALL$
	- Generate a random integer between $[1, HP_{max}]$ called $HP_{current}$
	- Calculate $f$ based on the formula $f = \frac{(HP_{max} \times 255 \times 4)}{(HP_{current} \times BALL)}$
	- If $f \ge N$, then the Pokemon is **caught**
	- Otherwise, the Pokemon **breaks free** 
- Body of the request
	- `pokemon` - name of the pokemon (String)
- Challenge (Optional): Allow for different Poke Ball types to be sent in the body of the request. Use the capture algorithm for a different Generation (see [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Catch_rate))

## Testing
The frontend part of the application has hard-coded test cases just to allow you to get a general sense of how your API should be built. I recommend testing and debugging your API with the tool Postman that I had everyone download. 

Also, if you are wondering what response should be returned, pay close attention to how the frontend code is written. For instance, if I destructure a variable `types` from the data object like so:
```js
let { types } = data 
```
The JSON response should contain the key `types`. If I then map over the variable `types` like so:
```jsx
types.map(type => <span>{type}</span>)
```
Then, your API implementation should return `types` as an array of strings. 

## Go above & beyond
- Feel free to edit and enhance the UI (though the overall layout of the app should align with the requirements)



