/**
 * AngularController
 *
 * @description :: Server-side logic for managing Angulars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 index: function(req,res){
	 	return res.view('angular/index',{layout:null});
	 }
};

