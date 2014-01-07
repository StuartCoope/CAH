"use strict";

var http = require('http');

var Cards = function(){
	var self = this();

	var urls = {
		white: "http://www.cardsagainsthumanity.com/wcards.txt",
		black: "http://www.cardsagainsthumanity.com/bcards1.txt"
	}

	var prefix = 'cards=';
	var separator = '<>';
	var blank = '__________';

	self.getCards = function(){
		
	};

};

module.exports.Cards = Cards;