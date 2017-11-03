'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = '<span style="color: red;"> Hi there </span>'

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2018',
            time: '10:30am',
            location: {
                address: 'Google Headquaters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    level: 'Advanced',
                    duration: '1 hours',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    level: 'Introductory',
                    duration: '30 mins',
                    abstract: 'This session will take a closer look at scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved Controllers',
                    creatorName: 'Jane Doe',
                    level: 'Intermediate',
                    duration: '2 hours',
                    abstract: 'Controllers are the beginning of everything Angular does.',
                    upVoteCount: 0
                }
            ]
        }
        
        $scope.upVoteSession = function(session){
            
                session.upVoteCount ++;
            
            
        }

        $scope.downVoteSession = function(session){
            
                session.upVoteCount --;
           
            
        }
    }
);