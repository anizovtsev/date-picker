# duet-date-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                             | Default               |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `ariaLabel`      | `aria-label`        | Defines a specific areal label attribute for the date picker input.                                                                                                                                                                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                         | `undefined`           |
| `dateAdapter`    | --                  | Date adapter, for custom parsing/formatting. Must be object with a `parse` function which accepts a `string` and returns a `Date`, and a `format` function which accepts a `Date` and returns a `string`. Default is IS0-8601 parsing and formatting.                                                                                             | `DuetDateAdapter`                                                                                                                                                                                                                                                                                                                                                | `isoAdapter`          |
| `datesToDisable` | `dates-to-disable`  | List of date to disable separated by comma i.e. "YYYY-MM-DD,YYYY-MM-DD,YYYY-MM-DD" . Must be in IS0-8601 format: YYYY-MM-DD. This setting can be used alone or together with the min and max properties.                                                                                                                                          | `string`                                                                                                                                                                                                                                                                                                                                                         | `""`                  |
| `direction`      | `direction`         | Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right.                                                                                                                    | `"left" \| "right"`                                                                                                                                                                                                                                                                                                                                              | `"right"`             |
| `disabled`       | `disabled`          | Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.                                                                                                                                                                         | `boolean`                                                                                                                                                                                                                                                                                                                                                        | `false`               |
| `firstDayOfWeek` | `first-day-of-week` | Which day is considered first day of the week? `0` for Sunday, `1` for Monday, etc. Default is Monday.                                                                                                                                                                                                                                            | `DaysOfWeek.Friday \| DaysOfWeek.Monday \| DaysOfWeek.Saturday \| DaysOfWeek.Sunday \| DaysOfWeek.Thursday \| DaysOfWeek.Tuesday \| DaysOfWeek.Wednesday`                                                                                                                                                                                                        | `DaysOfWeek.Monday`   |
| `identifier`     | `identifier`        | Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.                                                                                                                                                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                         | `""`                  |
| `localization`   | --                  | Button labels, day names, month names, etc, used for localization. Default is English.                                                                                                                                                                                                                                                            | `{ buttonLabel: string; placeholder: string; selectedDateMessage: string; prevMonthLabel: string; nextMonthLabel: string; monthSelectLabel: string; yearSelectLabel: string; closeLabel: string; keyboardInstruction: string; calendarHeading: string; dayNames: DayNames; monthNames: MonthsNames; monthNamesShort: MonthsNames; locale: string \| string[]; }` | `defaultLocalization` |
| `max`            | `max`               | Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD. This setting can be used alone or together with the min property.                                                                                                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                         | `""`                  |
| `min`            | `min`               | Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD. This setting can be used alone or together with the max property.                                                                                                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                         | `""`                  |
| `monthAlwaysOn`  | `month-always-on`   | It prevents users to close the day selector window. I.e. it's visible even after you select a date and click on it. Even if the property is true, month selector is hidden by deafult. You need to show it first by calling the show() method (or wait for other events). After it appers, it will be visible until you close it programatically. | `boolean`                                                                                                                                                                                                                                                                                                                                                        | `false`               |
| `name`           | `name`              | Name of the date picker input.                                                                                                                                                                                                                                                                                                                    | `string`                                                                                                                                                                                                                                                                                                                                                         | `"date"`              |
| `required`       | `required`          | Should the input be marked as required?                                                                                                                                                                                                                                                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                                                        | `false`               |
| `role`           | `role`              | Defines a specific role attribute for the date picker input.                                                                                                                                                                                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                         | `undefined`           |
| `value`          | `value`             | Date value. Must be in IS0-8601 format: YYYY-MM-DD.                                                                                                                                                                                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                         | `""`                  |


## Events

| Event        | Description                                     | Type                                                                                |
| ------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| `duetBlur`   | Event emitted the date picker input is blurred. | `CustomEvent<{ component: "duet-date-picker"; }>`                                   |
| `duetChange` | Event emitted when a date is selected.          | `CustomEvent<{ component: "duet-date-picker"; valueAsDate: Date; value: string; }>` |
| `duetFocus`  | Event emitted the date picker input is focused. | `CustomEvent<{ component: "duet-date-picker"; }>`                                   |


## Methods

### `hide(moveFocusToButton?: boolean) => Promise<void>`

Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
returning to the date picker's button. Default is true.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the date picker's input. Use this method instead of the global `focus()`.

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Show the calendar modal, moving focus to the calendar inside.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
