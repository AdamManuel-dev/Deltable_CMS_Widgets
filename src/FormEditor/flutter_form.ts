export const add_lead = {
  "type": "Form",
  "name": "Add Lead Form",
  "id": "297dd583-bad1-4fda-b39b-6927ae7c80f0",
  "definition": {
    "@name": "form",
    "id": "Test0Form",
    "label": "Test Form",
    "children": [
      {
        "@name": "formGroup",
        "id": "primaryHomeownerGroupContainer",
        "name": "Homeowner",
        "filled": "true",
        "children": [
          {
            "@name": "textField",
            "id": "firstName",
            "label": "First Name",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              }
            ]
          },
          {
            "@name": "textField",
            "id": "lastName",
            "label": "Last Name",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              }
            ]
          }
        ]
      },
      {
        "@name": "formGroup",
        "id": "addressGroupContainer",
        "name": "Address",
        "filled": "true",
        "children": [
          {
            "@name": "textField",
            "id": "streetAddress",
            "label": "Street Address",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              }
            ]
          },
          {
            "@name": "textField",
            "id": "zip",
            "label": "Zip Code",
            "inputType": "number",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              },
              {
                "@name": "validation",
                "message": "Must be 5 digits",
                "isValid": {
                  "expression": "length(@zip) == 5"
                }
              }
            ]
          },
          {
            "@name": "textField",
            "id": "city",
            "label": "City",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              }
            ]
          },
          {
            "@name": "formGroup",
            "id": "state0Group",
            "name": "State",
            "children": [
              {
                "@name": "dropdownButton",
                "id": "state",
                "value": "none",
                "choices": [
                  {
                    "@name": "dropdownOption",
                    "id": "empty",
                    "value": "none",
                    "label": "[ Select ]"
                  },
                  {
                    "@name": "dropdownOption",
                    "id": "IL",
                    "value": "IL",
                    "label": "IL"
                  },
                  {
                    "@name": "dropdownOption",
                    "id": "KS",
                    "value": "KS",
                    "label": "KS"
                  },
                  {
                    "@name": "dropdownOption",
                    "id": "MO",
                    "value": "MO",
                    "label": "MO"
                  },
                  {
                    "@name": "dropdownOption",
                    "id": "TN",
                    "value": "TN",
                    "label": "TN"
                  },
                  {
                    "@name": "dropdownOption",
                    "id": "TX",
                    "value": "TX",
                    "label": "TX"
                  }
                ],
                "validations": [
                  {
                    "@name": "validation",
                    "message": "Required",
                    "isValid": {
                      "expression": "@state != \"none\""
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "@name": "formGroup",
        "id": "contactInfoGroupContainer",
        "name": "Contact Info",
        "filled": "true",
        "children": [
          {
            "@name": "textField",
            "id": "emailAddress",
            "label": "Email Address",
            "inputType": "email"
          },
          {
            "@name": "textField",
            "id": "primaryPhone",
            "label": "Primary Phone",
            "inputType": "phone",
            "validations": [
              {
                "@name": "requiredValidation",
                "message": "Required"
              },
              {
                "@name": "validation",
                "message": "Must be a valid phone number",
                "isValid": {
                  "expression": "matches(@primaryPhone, \"^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$\")"
                }
              }
            ]
          },
          {
            "@name": "textField",
            "id": "secondaryPhone",
            "label": "Secondary Phone",
            "inputType": "phone",
            "validations": [
              {
                "@name": "validation",
                "message": "Must be a valid phone number",
                "isValid": {
                  "expression": "matches(@secondaryPhone, \"^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$\") || @secondaryPhone == \"\""
                }
              }
            ]
          },
          {
            "@name": "signaturePad",
            "label": "Permission Signature",
            "id": "contactAgreementSignature",
            "name": "Agreement Signature",
            "border": true
          }
        ]
      },
      {
        "@name": "formGroup",
        "id": "appointmentGroupContainer",
        "filled": "true",
        "children": [
          {
            "@name": "formGroup",
            "id": "leadStatus0Group",
            "name": "Does the lead want to schedule an appointment?",
            "children": [
              {
                "@name": "radioButtonGroup",
                "id": "leadStatus",
                "value": "halfLead",
                "choices": [
                  {
                    "@name": "radioButton",
                    "id": "Yes",
                    "value": "fullLead",
                    "label": "Yes"
                  },
                  {
                    "@name": "radioButton",
                    "id": "No",
                    "value": "halfLead",
                    "label": "No"
                  }
                ]
              }
            ]
          },
          {
            "@name": "dropdownButtonMultiSelect",
            "id": "appointmentTypes",
            "label": "Appointment Types",
            "choices": [
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "emptyAppointmentType",
                "value": "none",
                "label": "[ Select ]",
                "disabled": true
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Bath",
                "value": "Bath",
                "label": "Bath"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Basement",
                "value": "Basement",
                "label": "Basement"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Deck",
                "value": "Deck",
                "label": "Deck"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Door",
                "value": "Door",
                "label": "Door"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Fence",
                "value": "Fence",
                "label": "Fence"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Gutters0GutterGuards",
                "value": "Gutters/Gutter Guards",
                "label": "Gutters/Gutter Guards"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Kitchen",
                "value": "Kitchen",
                "label": "Kitchen"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Roof",
                "value": "Roof",
                "label": "Roof"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Siding",
                "value": "Siding",
                "label": "Siding"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Soffit0Fascia",
                "value": "Soffit/Fascia",
                "label": "Soffit/Fascia"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Sunroom",
                "value": "Sunroom",
                "label": "Sunroom"
              },
              {
                "@name": "dropdownOptionMultiSelect",
                "id": "Windows",
                "value": "Windows",
                "label": "Windows"
              }
            ],
            "validations": [
              {
                "@name": "validation",
                "message": "Required",
                "isValid": {
                  "expression": "matches(@leadStatus, \"halfLead\") || (@Bath.isSelected || @Basement.isSelected || @Deck.isSelected || @Fence.isSelected || @Kitchen.isSelected || @Roof.isSelected || @Siding.isSelected || @Soffit0Fascia.isSelected || @Windows.isSelected || @Door.isSelected || @Sunroom.isSelected || @Gutters0GutterGuards.isSelected)"
                }
              }
            ],
            "isVisible": {
              "expression": "matches(@leadStatus, \"fullLead\")"
            }
          },
          {
            "@name": "date",
            "id": "date",
            "firstDate": "2010-02-27",
            "lastDate": "2030-02-27",
            "label": "Appointment Date",
            "initialDate": null,
            "format": "yyyy-MM-dd",
            "validations": [
              {
                "@name": "validation",
                "message": "Required",
                "isValid": {
                  "expression": "@date.day != -1 || matches(@leadStatus, \"halfLead\")"
                }
              }
            ],
            "isVisible": {
              "expression": "matches(@leadStatus, \"fullLead\") && (@Bath.isSelected || @Basement.isSelected || @Deck.isSelected || @Fence.isSelected || @Kitchen.isSelected || @Roof.isSelected || @Siding.isSelected || @Soffit0Fascia.isSelected || @Windows.isSelected || @Door.isSelected || @Sunroom.isSelected || @Gutters0GutterGuards.isSelected)"
            }
          },
          {
            "@name": "timeslotDropdownButton",
            "id": "appointmentTime",
            "value": "none",
            "label": "Appointment Time",
            "choices": [
              {
                "@name": "timeslotDropdownOption",
                "id": "empty",
                "value": "none",
                "label": "[ Select ]"
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1000am",
                "value": "10:00am",
                "label": "10:00am",
                "hourMinute": "10:00",
                "isVisible": {
                  "expression": "@t1000am.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1030am",
                "value": "10:30am",
                "label": "10:30am",
                "hourMinute": "10:30",
                "isVisible": {
                  "expression": "@date.day != 0 && @date.day != 6 && (@t1030am.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1100am",
                "value": "11:00am",
                "label": "11:00am",
                "hourMinute": "11:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t1100am.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1130am",
                "value": "11:30am",
                "label": "11:30am",
                "hourMinute": "11:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t1130am.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1200pm",
                "value": "12:00pm",
                "label": "12:00pm",
                "hourMinute": "12:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@t1200pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t1230pm",
                "value": "12:30pm",
                "label": "12:30pm",
                "hourMinute": "12:30",
                "isVisible": {
                  "expression": "@date.day != 0 && @date.day != 6 && (@t1230pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0100pm",
                "value": "1:00pm",
                "label": "1:00pm",
                "hourMinute": "13:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0100pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0130pm",
                "value": "1:30pm",
                "label": "1:30pm",
                "hourMinute": "13:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0130pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0200pm",
                "value": "2:00pm",
                "label": "2:00pm",
                "hourMinute": "14:00",
                "isVisible": {
                  "expression": "(@t0200pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0230pm",
                "value": "2:30pm",
                "label": "2:30pm",
                "hourMinute": "14:30",
                "isVisible": {
                  "expression": "((@date.day != 0 && @date.day != 6) || (@date.day == 6 && (@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected))) && (@t0230pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0300pm",
                "value": "3:00pm",
                "label": "3:00pm",
                "hourMinute": "15:00",
                "isVisible": {
                  "expression": "(((@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6)) || ((@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && @date.day == 6)) && (@t0300pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0330pm",
                "value": "3:30pm",
                "label": "3:30pm",
                "hourMinute": "15:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0330pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0400pm",
                "value": "4:00pm",
                "label": "4:00pm",
                "hourMinute": "16:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0400pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0430pm",
                "value": "4:30pm",
                "label": "4:30pm",
                "hourMinute": "16:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0430pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0500pm",
                "value": "5:00pm",
                "label": "5:00pm",
                "hourMinute": "17:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0500pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0530pm",
                "value": "5:30pm",
                "label": "5:30pm",
                "hourMinute": "17:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0530pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0600pm",
                "value": "6:00pm",
                "label": "6:00pm",
                "hourMinute": "18:00",
                "isVisible": {
                  "expression": "(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0600pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0730pm",
                "value": "7:30pm",
                "label": "7:30pm",
                "hourMinute": "19:30",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0730pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              },
              {
                "@name": "timeslotDropdownOption",
                "id": "t0800pm",
                "value": "8:00pm",
                "label": "8:00pm",
                "hourMinute": "20:00",
                "isVisible": {
                  "expression": "(@Deck.isSelected || @Fence.isSelected || @Roof.isSelected || @Soffit0Fascia.isSelected || @Siding.isSelected || @Door.isSelected || @Windows.isSelected || @Gutters0GutterGuards.isSelected) && !(@Bath.isSelected || @Basement.isSelected || @Kitchen.isSelected || @Sunroom.isSelected) && (@date.day != 0 && @date.day != 6) && (@t0800pm.hourMinuteDateTime > now() || (!isNullOrEmpty(@date) && @date > now()))"
                }
              }
            ],
            "validations": [
              {
                "@name": "validation",
                "message": "Required",
                "isValid": {
                  "expression": "@appointmentTime != \"none\" || @date.day == -1 || matches(@leadStatus, \"halfLead\")"
                }
              }
            ],
            "isVisible": {
              "expression": "@date.day != -1"
            }
          }
        ]
      },
      {
        "@name": "formGroup",
        "id": "notesGroupContainer",
        "filled": "true",
        "children": [
          {
            "@name": "textField",
            "id": "notes",
            "label": "Notes",
            "inputType": "multiline",
            "minLines": 4
          }
        ]
      }
    ]
  },
  "category": "Canvassing",
  "callback": "https://midtown-api.azurewebsites.net/api/form/callback"
}