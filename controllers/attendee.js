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

const team = (req, res) => {
    db.Attendee.find({ team: req.query.q }, (error, foundAttendees) => {
        if (error) {
            console.log('Error in attendees#index:', error)
            return res.send('Incomplete attendees#index controller function')
        }
        res.status(200).json({
            attendees: foundAttendees,
        })
    })
}

const company = (req, res) => {
    db.Attendee.find({ Company: req.query.q }, (error, foundAttendees) => {
        if (error) {
            console.log('Error in attendees#index:', error)
            return res.send('Incomplete attendees#index controller function')
        }
        res.status(200).json({
            attendees: foundAttendees,
        })
    })
}

const title = (req, res) => {
    db.Attendee.find({ title: req.query.q }, (error, foundAttendees) => {
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
    team,
    company,
    title,
}