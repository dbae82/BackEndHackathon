const db = require('../models')

const index = (req, res) => {
    db.Attendee.find({}, (error, foundAttendees) => {
        if (error) {
            console.log('Error in attendees#index:', error)
            return res.send('Incomplete attendees#index controller function')
        }
        res.status(200).json({
            attendees: foundAttendees,
        })
    })
}

module.exports = {
    index,
}