'use strict';

var date = {};

/**
 * Get today's date, formatted to a mysql acceptable format.
 * 
 * @return Today's date.
 */ 
date.sqlNow = function sqlNow () {
	return new Date().toISOString().slice(0, 19).replace('T', ' ');;
};

date.formatUpdateAt = function formatUpdateAt (rows) {
	var date;
	for (var i = 0; i < rows.length; i++) {
        date = rows[i].updated_at;
        rows[i].updated_at = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    }
	
	return rows;
};

module.exports = date;