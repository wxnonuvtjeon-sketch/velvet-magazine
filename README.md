# VELVET Magazine — source code

A responsive static website prototype for your fictional VELVET Magazine AU.

## Files
- `index.html` — website structure and sections
- `styles.css` — visual design and responsive layout
- `data.js` — editable company, department, and employee information
- `script.js` — team search, department filter, and employee profile popups

## Preview locally
1. Download and unzip this folder.
2. Open `index.html` in a modern browser.
3. Internet connection is needed for Google Fonts and the sample Unsplash hero/editorial images.

## Edit employee information
Open `data.js` in a text editor (for example VS Code, Notepad, or TextEdit).
Each employee is an object inside `siteData.employees`. Change:
- `name`
- `role`
- `department`
- `joined`
- `bio`
- `education`
- `experience`
- `skills`
- `photo`

For photos, create an `images` folder beside the HTML file, put the portrait there, then set for example:
`photo: "images/nadine.jpg"`

Leave `photo: ""` to show initials instead.

## Add a new employee
Copy one employee object in `data.js`, paste it as a new item inside the `employees` array, and update the details. Keep commas between objects.

## Change departments
Edit the `siteData.departments` array in `data.js`. The department filter is generated automatically from this list.

## Publish online
This is a static website. You can upload the folder to a static hosting service such as GitHub Pages or Netlify. The current contact addresses use the reserved `.example` domain and are placeholders; replace them before publishing. The company, staff, and job openings are fictional AU content.
