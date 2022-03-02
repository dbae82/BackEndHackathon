const db = require('./models')
const data = require('./attendees.json')

db.Attendee.deleteMany({}, (error, deletedAttendees) => {
    db.Attendee.create(data, (error, seededAttendees) => {
        if (error) console.log(error);
        console.log(data.length, 'Attendees created successfully');
        process.exit()
    })
})