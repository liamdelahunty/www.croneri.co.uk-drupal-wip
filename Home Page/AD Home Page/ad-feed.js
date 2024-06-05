<script>

// From Wayne Hemsley
// Here's a simplified version of the code we are using to fetch the RSS feed:
// Basically it's doing:
// fetch("https://www.accountancydaily.co/article-feed")
// Then parsing out the feed into 3 categories of articles (Tax. accounting and audit).
// It will run in a browser console but only if you are on the accountancydaily.co site 
// otherwise it's blocked due to missing CORS headers.

const getFeedItems = (text) => {
    const items = [];

    new DOMParser()
    .parseFromString(text, "text/xml")
    .querySelectorAll("item")
    .forEach((docItem) => items.push(parseDocItem(docItem)));

    return items;

}

const parseDocItem = (docItem) => {

    const item = {

        title:
        docItem
        .querySelector("title")
        .textContent,

        link:
        docItem
        .querySelector("link")
        .innerHTML,

        description:
        docItem
        .querySelector("description")
        .innerHTML,

        categories:
        []

    };

    docItem
    .querySelectorAll("category")
    .forEach((category) => item.categories.push(category.textContent));
    
    return item;

};

const filterArticles = (items) => {

    const articles = {

        tax:
        items
        .filter((item) => item.categories.includes("Tax")),

        accounting:
        items
        .filter((item) => item.categories.includes("Accounting")),

        audit:
        items
        .filter((item) => item.categories.includes("Audit"))
    };

    return articles;

}

fetch("https://www.accountancydaily.co/article-feed")
.then((response) => response.text())
.then(getFeedItems)
.then(filterArticles)
.then(console.log);

</script>