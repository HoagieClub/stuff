import { Pane } from "evergreen-ui";

// View is an extremely simple component to make sure that the layout is consistent
export default function View({ children }) {
    return (
        <Pane
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Pane
                width="100%"
                maxWidth="1200px"
            >
                { children }
            </Pane>
        </Pane>
    );
}