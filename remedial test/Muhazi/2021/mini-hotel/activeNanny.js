// const getActiveNanny = await Appointment.findAll({
//   where: {
//     date_request: new Date()
//    },
//    attributes: ['nanny_id''nanny_]'
// })


const getActiveNanny = [
  {
    nanny_id:'nanny_1'
  },
  {
    nanny_id:'nanny_3'
  },
  {
    nanny_id:'nanny_1'
  },
  {
    nanny_id:'nanny_1'
  },
  {
    nanny_id:'nanny_2'
  },
  {
    nanny_id:'nanny_2'
  },
  {
    nanny_id:'nanny_4'
  },
  {
    nanny_id:'nanny_5'
  },
  {
    nanny_id:'nanny_7'
  }
]

const activeNanny = Array.from(new Set(getActiveNanny.map(x => x.nanny_id))).length
console.log(activeNanny)
// set gunanya get unique element in array