var ADD_REPOSITORY = 'ADD_REPOSITORY';
var addRepository = function(repository) {
	return{
		type: ADD_REPOSITORY,
		repository: repository
	}
};

var RATE_RESPOSITORY = 'RATE_RESPOSITORY';
var rateRepository = function(repository, rating){
	return {
		type: RATE_RESPOSITORY,
		repository: repository,
		rating: rating
	}
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_RESPOSITORY = RATE_RESPOSITORY;
exports.rateRepository = rateRepository;