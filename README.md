# Web Development Project 5 - _Data Dashboard_

Submitted by: **John Mikko Velasquez**

This web app: **This app fetches data from an api and displays it. You can filter through the data through the filters or by searching up something in the search bar**

Time spent: **7** hours spent in total

Live demo: https://codepath-sp2024-project5-ud6v.vercel.app/

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] _# of NBA East teams_
  - [x] _# of NBA West teams_
  - [x] _# of Non-NBA teams_
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
  - [x] One search bar and 2 checkboxes
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/codepath-web102-project5.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with Kap

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- I had some trouble with fetching the eastern and western conference teams from the api. I initially wanted to use the same function but just change the parameters, but had difficulty so I just had 2 functions (to fetch data) and 2 state variables instead of 1 function and 1 state variable
- I also had some trouble conditionally rendering something. It wouldn't display even if should've but then I learned that an empty array will count as true in a conditional statement

## License

    Copyright [2024] [John Mikko Velasquez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Web Development Project 6 - _Data Dashboard Pt. 2_

Submitted by: **John Mikko Velasquez**

This web app: **Implements react router and recharts.js to create a visually appealing website with great user experience due to the faster load times**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**

The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

- [x] List anything else that you added to improve the site's functionality!
- [x] I added an error page for when the user goes to an invalid route

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/codepath-web102-project6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with Kap

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- It was a difficult at first to wrap my head around react router but after I followed along to the tutorial, it became much easier
- I had some difficulty in making sure everything aligned because I put margins, paddings, and gaps in many of my elements

## License

    Copyright [2024] [John Mikko Velasquez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
