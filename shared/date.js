'use strict';

var date = {};

/**
 * Get today's date, formatted to a mysql acceptable format.
 * 
 * @return Today's date.
 */ 
date.sqlNow = function sqlNow () {
	return new Date().toISOString().slice(0, 19).replace('T', ' ');
};

date.sqlDate = function sqlDate (date) {
	return date.toISOString().slice(0, 19).replace('T', ' ');
};

date.sqlDateRaw = function sqlDate (year, month, day, hours, minutes, seconds, milliseconds) {
	var newDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);

	return date.sqlDate(newDate).toISOString().slice(0, 19).replace('T', ' ');
};

date.formatUpdateAt = function formatUpdateAt (rows) {
	var newDate;
	for (var i = 0; i < rows.length; i++) {
		newDate = rows[i].updated_at;
		rows[i].updated_at = newDate.getMonth() + '/' + newDate.getDate() + '/' + newDate.getFullYear();
	}
	
	return rows;
};

module.exports = date;