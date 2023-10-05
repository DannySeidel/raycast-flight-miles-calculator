import { Form, ActionPanel, Action, useNavigation } from "@raycast/api"
import { AirportDropDownView } from "./AirportDropDownView"
import { ResultView } from "./ResultView"
import { milesValues } from "../ressources/milesValues"

interface submitValues {
    origin: string
    destination: string
    miles: string
}

export const SelectionFormView = () => {
    const { push } = useNavigation()

    return (
        <Form
            actions={
                <ActionPanel>
                    <Action.SubmitForm onSubmit={(values: submitValues) => push(<ResultView {...values} />)} />
                </ActionPanel>
            }
        >
            <AirportDropDownView dropdownId="origin" title="Origin Airport" autofocus />
            <AirportDropDownView dropdownId="destination" title="Destination Airport" />

            <Form.Separator />

            <Form.Dropdown id="miles" title="Miles Percentage" defaultValue="1">
                {milesValues.map((value) => (
                    <Form.Dropdown.Item key={value} value={value.toString()} title={`${value * 100}%`} />
                ))}
            </Form.Dropdown>
        </Form>
    )
}
