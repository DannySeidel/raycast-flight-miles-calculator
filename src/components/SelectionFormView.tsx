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

    function handleFormSubmit(values: submitValues) {
        const origin = JSON.parse(values.origin)
        const destination = JSON.parse(values.destination)
        const milesPercentage = parseFloat(values.miles)

        push(<ResultView origin={origin} destination={destination} milesPercentage={milesPercentage} />)
    }


    return (
        <Form
            actions={
                <ActionPanel>
                    <Action.SubmitForm onSubmit={handleFormSubmit} />
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
