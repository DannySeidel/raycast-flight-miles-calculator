import { Form, ActionPanel, Action, showToast } from "@raycast/api"
import { AirportDropDownView } from "./AirportDropDownView"

interface Values {
    textfield: string
    textarea: string
    datepicker: Date
    checkbox: boolean
    dropdown: string
    tokeneditor: string[]
}

export const SelectionFormView = () => {
    function handleSubmit(values: Values) {
        console.log(values)
        showToast({ title: "Submitted form", message: "See logs for submitted values" })
    }

    return (
        <Form
            actions={
                <ActionPanel>
                    <Action.SubmitForm onSubmit={handleSubmit} />
                </ActionPanel>
            }
        >
            <AirportDropDownView dropdownId="origin" title="Origin Airport" autofocus />
            <AirportDropDownView dropdownId="destination" title="Destination Airport" />

            <Form.Separator />

            <Form.Dropdown id="miles" title="Miles Percentage" defaultValue="1">
                <Form.Dropdown.Item value="0.1" title="10%" />
                <Form.Dropdown.Item value="0.15" title="15%" />
                <Form.Dropdown.Item value="0.2" title="20%" />
                <Form.Dropdown.Item value="0.25" title="25%" />
                <Form.Dropdown.Item value="0.5" title="50%" />
                <Form.Dropdown.Item value="0.75" title="75%" />
                <Form.Dropdown.Item value="1" title="100%" />
                <Form.Dropdown.Item value="1.25" title="125%" />
                <Form.Dropdown.Item value="1.5" title="150%" />
                <Form.Dropdown.Item value="1.75" title="175%" />
                <Form.Dropdown.Item value="2" title="200%" />
            </Form.Dropdown>
        </Form>
    )
}
