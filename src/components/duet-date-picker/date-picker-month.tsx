import { h, FunctionalComponent } from "@stencil/core"
import { DuetLocalizedText } from "./date-localization"
import { DatePickerDay, DatePickerDayProps } from "./date-picker-day"
import { getViewOfMonth, inRange, DaysOfWeek, isEqual } from "./date-utils"

function chunk<T>(array: T[], chunkSize: number): T[][] {
  const result = []

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }

  return result
}

function mapWithOffset<T, U>(array: T[], startingOffset: number, mapFn: (item: T) => U): U[] {
  return array.map((_, i) => {
    const adjustedIndex = (i + startingOffset) % array.length
    return mapFn(array[adjustedIndex])
  })
}

type DatePickerMonthProps = {
  selectedDate: Date
  focusedDate: Date
  labelledById: string
  localization: DuetLocalizedText
  firstDayOfWeek: DaysOfWeek
  min?: Date
  max?: Date
  datesToDisable: Date[]
  dateFormatter: Intl.DateTimeFormat
  onDateSelect: DatePickerDayProps["onDaySelect"]
  onKeyboardNavigation: DatePickerDayProps["onKeyboardNavigation"]
  focusedDayRef: (element: HTMLButtonElement) => void
}

export const DatePickerMonth: FunctionalComponent<DatePickerMonthProps> = ({
  selectedDate,
  focusedDate,
  labelledById,
  localization,
  firstDayOfWeek,
  min,
  max,
  datesToDisable,
  dateFormatter,
  onDateSelect,
  onKeyboardNavigation,
  focusedDayRef,
}) => {
  const today = new Date()
  const days = getViewOfMonth(focusedDate, firstDayOfWeek)

  return (
    <table class="duet-date__table" aria-labelledby={labelledById}>
      <thead>
        <tr>
          {mapWithOffset(localization.dayNames, firstDayOfWeek, dayName => (
            <th class="duet-date__table-header" scope="col">
              <span aria-hidden="true">{dayName.substr(0, 2)}</span>
              <span class="duet-date__vhidden">{dayName}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {chunk(days, 7).map(week => (
          <tr class="duet-date__row">
            {week.map(day => (
              <td class="duet-date__cell">
                <DatePickerDay
                  day={day}
                  today={today}
                  focusedDay={focusedDate}
                  isSelected={isEqual(day, selectedDate)}
                  inRange={inRange(day, min, max, datesToDisable)}
                  onDaySelect={onDateSelect}
                  dateFormatter={dateFormatter}
                  onKeyboardNavigation={onKeyboardNavigation}
                  focusedDayRef={focusedDayRef}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
