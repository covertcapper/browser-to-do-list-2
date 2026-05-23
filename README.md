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

- Working on creating a more interesting button using an input and a label since checkboxes aren't "style friendly" in HTML.
</details>

<details>
    <summary>Notes: 17-05-2026</summary>

- Using the checkbox for this use-case was overkill since we're not actually submitting anything in this instance, so I scrapped trying to deal with it and just styled some CSS for checking items off.

- Learning the JS step by step with online references and not just doing a tutorial step by step.
</details>

<details>
    <summary>Notes: 18-05-2026</summary>

- Added a function to submit an item to the list by pressing "enter". Learned about `preventDefault();`

- Took some effort but I figured out how to toggle a checkmark within JS. Learned about `removeChild()`.

</details>

<details>
    <summary>Notes: 19-05-2026</summary>

- Made it so I can delete elements with the delete button.

- Added an `if` `else` statement that won't allow an empty "new task" field to be submitted.

</details>

<details>
    <summary>Notes: 23-05-2026</summary>

- Worked on setting up page so that if it's refreshed any list items won't disappear. I found this task to be quite difficult to understand, so I needed substantial help from Claude. I've taken note of this and will study the process separately so I can better understand it.

</details>
