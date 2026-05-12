# Browser To-Do List #2

A browser to-do list that I created for JavaScript practice.

## Learning Notes

<details>
    <summary>Notes: 10-05-2026</summary>

- I wanted to add a gradient to the to-do list border, and I was able to do so with this trick:

  ```
   background:
   linear-gradient(#34af84, #34af84) padding-box,
   linear-gradient(to top, #d7efd9 0%, #f1fbf0 100%) border-box;

  ```

- I learned how to size and image properly over a button, I didn't want to use a website like "font awesome" for the icon.

- Setting it up so that the text didn't move down to the next line too soon proved to be a slight issue. I struggled with setting up the `flex` property, but it turned out that using `width` with percentages was causing the issue.
</details>

<details>
    <summary>Notes: 12-05-2026</summary>

- Tidied up the CSS for the task fields. My original code was unorganized, but I was able to do a cleaner job of it the second time having a better understanding of the process.

- Working on creating a more interesting button using am input and a label since checkboxes aren't "style friendly" in HTML.
</details>
