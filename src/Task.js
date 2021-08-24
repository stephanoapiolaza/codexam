import './Task.css';
import parse from 'html-react-parser';

function Task() {
  return (
    <div className="has-text-white is-size-6 has-height-6 scrollable">
        {parse(
            `<div className="task-description__TaskContentWrapper-sc-380ibo-1 gHbVUV task-description-content"><p>Your
            application is using React Context to share the state across multiple components. Your task is to implement
            a <code>PhotosList</code> component that renders a photos list and also adjusts it's colors to a given
            theme. There are two contexts available - <code>PhotosContext</code>, <code>ThemeContext</code> - and they
            are the source of the data.</p>
            <p>Application uses <code>React 16.8.6</code>.</p>
            <h4>Contexts</h4>
            <p><code>PhotosContext</code> shares the following state: <code>{photos, fetchPhotos}</code>.</p>
            <p>The <code>photos</code> is the list of the photos and each photo has the shape
                of <code>{title, imgSrc}</code>. Both <code>title</code> and <code>imgSrc</code> are strings.
                The <code>fetchPhotos</code> is a method that tells the context component to fetch more photos. It
                returns a promise after a succesfull call, but doesn't resolve with any data - new photos list is
                handled by the context component and later available through <code>photos</code> variable.</p>
            <p><code>ThemeContext</code> shares the following state: <code>{theme}</code>.
                <code>theme</code> is a string and can take two values: <code>light</code> or <code>dark</code>. Default
                value is <code>light</code>.</p>
            <p>Both context modules contain following properties: <code>Context</code> and <code>Consumer</code>.
                Providers for two contexts are already rendered behind the scenes and you don't need to take care of
                them. Depending on the component type you choose (class vs functional) use them for example like
                this: <code>PhotosContext.Context</code> or <code>ThemeContext.Consumer</code>.</p>
            <h4>Requirements</h4>
            <p><code>PhotosList</code> component:</p>
            <ul>
                <li>should be a <code>div</code> with a <code>photos-list-container</code> id,</li>
                <li>should render an unordered list (<code>&lt;ul /&gt;</code>) of the photos (<code>&lt;li /&gt;</code>),
                </li>
                <li>list element <code>ul</code> should have a <code>photos-list</code> id,</li>
                <li><code>photos-list-container</code> should have <code>white</code> background
                    (<code>background</code> CSS property) for <code>light</code> theme
                    and <code>black</code> background for <code>dark</code> theme.
                </li>
            </ul>
            <p>An each photo (<code>&lt;li&gt;</code>):</p>
            <ul>
                <li>should have a title (<code>&lt;h3&gt;</code>),</li>
                <li>the title text color should be <code>black</code> for <code>light</code> theme
                    and <code>white</code> for <code>dark</code> theme,
                </li>
                <li>should have an img (<code>&lt;img /&gt;</code>) with the image source from <code>imgSrc</code> field
                    of the <code>photo</code>.
                </li>
            </ul>
            <p>Additionally, below the <code>PhotosList</code>, you should place a button (<code>&lt;button /&gt;</code>)
                that will call the <code>fetchPhotos</code> method (from the context). The button should have
                a <code>fetch-photos</code> id.</p>
            <p>For the reference, you can use the following image:</p>
            <p class="has-text-centered"><img
                src="https://s3.amazonaws.com/codility-frontend-prod/media/task_static/photos_list/static/1576497491/images/component.png"
                alt="" /></p></div>
    `)}
    </div>
  );
}

export default Task;
