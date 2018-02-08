import APIError from '../helpers/APIError';
import Machine from '../models/machine.model';
import pdf from '../modules/pdf';
import ipscan from '../modules/ipscan';

function getAllMachines(req, res, next) {
	Machine.getAll()
		.then(machines => res.json(machines))
		.catch(e => next(e))
}

function postIPScan(req, res) {
	ipscan(req.body.file);
}

function getQRCodes(req, res) {
	pdf(res, req.query.compList);
	res.status(200);
}

export default {
	getAllMachines,
	getQRCodes,
	postIPScan
};
