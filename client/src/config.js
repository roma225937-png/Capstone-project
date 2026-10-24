export const appConfig = {
  "name": "Appointment Booking System",
  "short": "Slotly",
  "description": "Record appointments with customer, service provider, date, time, and status.",
  "collection": "appointments",
  "singular": "appointment",
  "fields": [
    {
      "name": "customerName",
      "label": "Customer name",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "service",
      "label": "Service",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "date",
      "label": "Appointment date",
      "type": "date",
      "required": true,
      "options": []
    },
    {
      "name": "time",
      "label": "Time",
      "type": "time",
      "required": true,
      "options": []
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "required": true,
      "options": [
        "Requested",
        "Confirmed",
        "Completed",
        "Cancelled"
      ]
    }
  ],
  "sample": [
    {
      "customerName": "Maya Joseph",
      "service": "Consultation",
      "provider": "Dr. Anil",
      "date": "2026-11-03",
      "time": "10:30",
      "status": "Confirmed"
    }
  ]
};
