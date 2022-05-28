import { MyComponent } from "./MyComponent";

export default {
    component: MyComponent,
    excludeStories: /^EXAMPLE_/
}

export const EXAMPLE_STRING = 'Example'.trim();
export const ExampleStory = () => <MyComponent />;