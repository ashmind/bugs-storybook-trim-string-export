import { MyComponent } from "./MyComponent";

export default {
    component: MyComponent,
    excludeStories: /^EXAMPLE_/
}

export const EXAMPLE_STRING_NO_TRIM = 'Example';
const example = 'Example'.trim();
export const EXAMPLE_STRING_PRE_TRIM = example;

export const ExampleStory = () => <MyComponent />;