import { Pane, Card, Heading, majorScale, Paragraph } from "evergreen-ui";


interface MenuCardProps {
    /** the name of the dining hall */
    college:string;
     /** list of meal option objects */
    food?: Array<Object>;
}

export default function MenuCard( {college, food=[], size=food.length}:MenuCardProps) {
    
    food = food.slice(0, size)

    return (  
        <Card 
        background="gray50" borderRadius={8}
        padding={32} marginX={majorScale(2)}
        marginY={majorScale(2)} minWidth={288}
        flex="0 0 0">
        <Heading is="h3" size={800} marginBottom={majorScale(2)}>{college}</Heading>
        {
            food.map( ({title, items}) => <>
                <Heading is="h4" size={400} marginTop={12} marginBottom={4}> 
                    <b>{title}</b> 
                </Heading>

                {items.map( (item) => 
                <Paragraph color="gray900" size={400} margin={0}>
                    {item}
                </Paragraph>)}
                </>)
        }
        </Card>
    )
}