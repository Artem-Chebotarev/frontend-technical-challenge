# Account Registration Wizard

## Start of the project

In client folder:
- `npm install` - Install frontend dependencies

In root folder:
- `npm install` - Install server dependencies 
- `npm run server` - Start the server
- `npm run client` - Start the frontend project in dev mode

----

## Scripts

- `npm run dev` - Run frontend project on vite
- `npm run test:unit` - Run unit tests with jest
- `npm run test:unit:coverage` - Run unit tests with jest with report creation (built-in jest cli)

----

## Project architecture

The project is written in accordance with the Feature Sliced Design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

#### NOTE: Since the task requires the creation of only a widget, the `shared` and `widgets` layers are implemented

----

## Components architecture

Components graph:

<img width="870" alt="components-architecture" src="https://github.com/Artem-Chebotarev/frontend-technical-challenge/assets/77831411/12c8806f-9250-4c11-8288-86e4bb89a285">

----

## Pagination (working with large payload items received from the server)

If the payload in this route is very big (for example, more than 200), we need to implement
in order to improve the performance of our wizard.
 
There are two options for pagination: `Offset-based pagination` and `Cursor-based pagination`.

`Offset-based pagination` involves using an offset to specify where to `start` retrieving data 
and a `limit` to specify the number of items to retrieve. It's like saying, "Start from the 10th 
record and give me the next 5 items". The offset can either be an explicit number or converted 
from the requested page number. Requesting page 3 with a page size of 5 will translate to an 
offset of 10 because there are 2 pages before the 3rd page and 2 x 5 = 10. It's more common 
for an offset-based pagination API to accept the page parameter and the server will convert 
it into the offset value when querying the database.

`Cursor-based pagination` uses a pointer (the cursor) to a specific record in a dataset. Instead 
of saying "give me items 11 to 15," it says "give me 5 items starting after [specific item].".
A cursor-based pagination API accepts the following parameters: `size` and `cursor`.
 *
In a nutshell, the choice between offset-based pagination and cursor-based pagination largely 
depends on the data and requirements. Offset-based is simpler and better for static or small 
datasets where direct access to pages is important. Cursor-based is more efficient and reliable 
for large, dynamic datasets where the data sequence is important and changes frequently.
 
If we want to implement infinite scrolling (like facebook news feed) we need to choose `Cursor-based pagination`.
However, in this case, we also need to implement `virtualization`.
 
With infinite scrolling, all the items are on one single page. As the user scrolls further down 
the page, more items are appended to the DOM and with these items having complex DOM structure 
(lots of details to render), the DOM size rapidly increases. `Virtualized lists` is a technique 
to render only the items that are within the viewport.
 
### There is no implementation of any type of pagination in the project, as this requires modifying server code (accept query params and so on)


## Tests

The project uses 2 types of tests:
1) unit tests with jest - `npm run test:unit`
2) Component Tests with React Testing Library -`npm run test:unit`

----

## Linting

The project uses eslint to check typescript code: 
 - `npm run lint` - Check ts files with lint

----

## Project configuration

The config for development:
- vite - vite.config.ts

----

## Working with server

Requests to the server are sent using native fetch
