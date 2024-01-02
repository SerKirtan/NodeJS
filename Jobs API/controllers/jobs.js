const getAllJobs = async(req, res) => {
    res.send('All jobs')
}

const getJob = async(req, res) => {
    res.send('get job')
}

const deleteJob = async(req, res) => {
    res.send('delete job')
}

const createJob = async(req, res) => {
    res.send('create job')
}

const updateJob = async(req, res) => {
    res.send('update job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}