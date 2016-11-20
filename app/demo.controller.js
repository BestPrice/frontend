/**
 * Created by Shripad on 2015-Nov-17.
 */
 
angular.module('AppTree',['tree.dropdown']).controller('treeDropdownCtrl',['$scope','$http', function ($scope,$http) 

{
    var ctrl = this;
    
    //$scope.states.push('blablabl');
    
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
            ctrl.treeData = response;
        /*
        ctrl.treeData = [{"id_category":"6b99d74e-456d-4b26-9514-9b393a8553e6","name":"Drogéria","subcategories":[{"id_category":"4b060487-2324-4721-b3f2-1e1d0d379e3a","name":"Šampóny","subcategories":[{"id_category":"f0a16ee5-b6ac-4a21-a305-9c3d125ca78f","name":"Šampón - dámsky"},{"id_category":"f92a512f-dc43-4705-97fa-f74cb80996da","name":"Šampón - pánsky"}]},{"id_category":"6f844c81-713f-4060-8731-0f233826ee1e","name":"Sprchové gély","subcategories":[{"id_category":"7883b456-b73f-4035-ba63-b0dd888b1a07","name":"Sprchový gél - dámsky"},{"id_category":"27ccc00e-3eb7-4067-af6e-fda8d9dbe297","name":"Sprchový gél - pánsky"}]},{"id_category":"f057a18a-fc52-4c2b-8d69-e0225a8bd1e9","name":"Mydlo"},{"id_category":"332b9ea8-831a-4b93-90a9-35a954be46ae","name":"Zubné pasty"}]},{"id_category":"8108e333-5bdb-4431-a28d-653335f456ec","name":"Elektronika","subcategories":[{"id_category":"d0641c77-a76c-46a0-876a-555f5d0b6299","name":"Batérie","subcategories":[{"id_category":"95a88128-3c58-4688-8e68-99616511b126","name":"AA"},{"id_category":"b7a55491-b6ee-4c35-b99c-a035662660b7","name":"AAA"},{"id_category":"ef5a2356-7dbb-4c7f-8e2f-41361a4bbe19","name":"9V"}]}]},{"id_category":"2c7ea9a8-c9e1-4eee-ac31-d5e181bd8d06","name":"Potraviny","subcategories":[{"id_category":"320a4e32-cd23-4629-827c-dcab0340106c","name":"Mliecne vyrobky","subcategories":[{"id_category":"d093db57-b83b-4b13-908c-aa5f73507fd4","name":"Smotana","subcategories":[{"id_category":"09600bcd-5dd1-410b-a86f-8d730e5b023b","name":"Smotana kyslá"},{"id_category":"d47ce574-06fe-4a77-9b8b-d3499385fc68","name":"Smotana na šlahanie"}]},{"id_category":"8531b38c-6136-471c-a989-0b5b9812b7bf","name":"Mlieko","subcategories":[{"id_category":"964b6bcd-1462-40d5-8aaf-f5ec46fe4fee","name":"Mlieko Plnotučné"},{"id_category":"32020dd3-d490-4b87-858b-017926e7953c","name":"Mlieko Polotučne"}]},{"id_category":"5d6f5911-dc94-4ccb-8bd5-482cd20f0aa0","name":"Jogurt","subcategories":[{"id_category":"0981b4ee-536b-4d1c-b636-e564ab935bc7","name":"Jogurt s prichuťou"},{"id_category":"d68b0733-f988-4ec4-88ad-988390f2bd45","name":"Biely Jogurt"}]}]},{"id_category":"19ef3bf5-2de3-4569-8b77-b0110b3654b2","name":"Trvanlivé potraviny","subcategories":[{"id_category":"6dd4e217-e362-4cd6-ad4e-ec303b6ec105","name":"Múka"},{"id_category":"7058b13c-8b72-4c18-904b-e15d6f225cd7","name":"Cestoviny"}]},{"id_category":"87e92681-9df2-4fd3-aa32-51f3d572f8ef","name":"Mäso","subcategories":[{"id_category":"79cc5801-c4e7-4787-8175-a1b89f12cd04","name":"Bravčové mäso"},{"id_category":"87df9f0b-e72a-4bc1-aeb7-409d5199724d","name":"Hydina","subcategories":[{"id_category":"fd01640e-4a11-420a-801f-89b50de6ed39","name":"Morka"},{"id_category":"1056de9e-e1ef-4bf6-8283-55bb4ce585bf","name":"Kura"}]}]},{"id_category":"f4e467c8-63c9-405a-998e-f7b96d4c898d","name":"Nápoje","subcategories":[{"id_category":"ff76f299-8670-4799-bbd3-4a8fe48bc1c3","name":"Alkoholické","subcategories":[{"id_category":"3b65df61-446c-4d73-a746-d3766d2b46b7","name":"Víno"},{"id_category":"be03c8d2-1fa5-40aa-8b02-854738e6fa79","name":"Pivo"}]},{"id_category":"1a74722c-e2ee-4af2-92e7-8fa1f3adb570","name":"Nealkoholické","subcategories":[{"id_category":"4a6308d9-b3fd-44e6-a1f0-50ba7936d357","name":"Cola"}]}]},{"id_category":"e33e388b-aa9d-4628-92a9-1d523234ff21","name":"Ovocie a zelenina","subcategories":[{"id_category":"b512eb5b-01b2-4c39-bf0b-eaefaf1386bd","name":"Zelenina","subcategories":[{"id_category":"27359a0e-f4b2-422b-8b45-5ca9800b251d","name":"Zemiaky"}]},{"id_category":"d779685f-6277-4ecb-8a4c-38aa58d056f7","name":"Ovocie"}]},{"id_category":"82444e68-48a5-421e-ba26-95eea56a4b4a","name":"Chlieb a pečivo","subcategories":[{"id_category":"433a8c0f-bdc9-4889-b6db-04e411289a6f","name":"Pečivo","subcategories":[{"id_category":"4363bf95-14bf-4d84-b5da-59258876c491","name":"Sladké pečivo"},{"id_category":"5e1762f3-1072-4f1b-9517-a81cb1a8ff66","name":"Slané pečivo"}]},{"id_category":"0c3b5995-20ae-4466-8348-c64da9cb56f4","name":"Chlieb"}]}]}];*/
    
    // Set default selected...
    ctrl.selected = ctrl.treeData[0];
    

    ctrl.update = function (){
        ctrl.treeData = [
            {
                "id": 1,
                "name": "Level 1",
            },
            {
                "id": 5,
                "name": "Level 2",
            }
        ]
        ctrl.selected = ctrl.treeData[0];
    }
    });
     
    //ctrl.treeData $scope;
    /*ctrl.treeData = [
    	{
            "id": 1,
    		"name": "Option 1",
    		"subcategories": [
    			{
                    "id": 2,
    				"name": "Option 1.1",
    				"subcategories": [
    					{
                            "id": 3,
		    				"name": "Option 1.1.1",
		    			},
                        {
                            "id": 4,
                            "name": "Option 1.1.2",
                        }
    				]
    			}
    		]
    	},
        {
            "id": 5,
            "name": "Option 2",
            "subcategories": [
                {
                    "id": 6,
                    "name": "Option 2.1",
                    "subcategories": [
                        {
                            "id": 7,
                            "name": "Option 2.1.1",
                        },
                        {
                            "id": 8,
                            "name": "Option 2.1.2",
                        }
                    ]
                }
            ]
        }
    ]*//*
    ctrl.treeData = [
        {
            "id_category":"6b99d74e-456d-4b26-9514-9b393a8553e6", "name": "Drogéria", "subcategories":   
            [
                {
                    "id_category":"4b060487-2324-4721-b3f2-1e1d0d379e3a","name":"Šampóny","subcategories":
                    [
                        {
                            "id_category":"f0a16ee5-b6ac-4a21-a305-9c3d125ca78f","name":"Šampón - dámsky"
                        },
                        {"id_category":"f92a512f-dc43-4705-97fa-f74cb80996da","name":"Šampón - pánsky"
                        }
                    ]
                },
                {
                    "id_category":"6f844c81-713f-4060-8731-0f233826ee1e","name":"Sprchové gély","subcategories":
                    [
                        {
                            "id_category":"7883b456-b73f-4035-ba63-b0dd888b1a07","name":"Sprchový gél - dámsky"
                        },
                        {
                            "id_category":"27ccc00e-3eb7-4067-af6e-fda8d9dbe297","name":"Sprchový gél - pánsky"
                        }
                    ]
                },
                {
                    "id_category":"f057a18a-fc52-4c2b-8d69-e0225a8bd1e9","name":"Mydlo"
                },
                {"id_category":"332b9ea8-831a-4b93-90a9-35a954be46ae","name":"Zubné pasty"
                }
            ]
        },
        {
            "id_category":"8108e333-5bdb-4431-a28d-653335f456ec","name":"Elektronika","subcategories":
            [
                {
                    "id_category":"d0641c77-a76c-46a0-876a-555f5d0b6299","name":"Batérie","subcategories"
                    :
                    [
                        {
                            "id_category":"95a88128-3c58-4688-8e68-99616511b126","name":"AA"}
                        ,
                        {
                            "id_category":"b7a55491-b6ee-4c35-b99c-a035662660b7","name":"AAA"
                        },
                        {
                            "id_category":"ef5a2356-7dbb-4c7f-8e2f-41361a4bbe19","name":"9V"
                        }
                    ]
                }
            ]
        }
    ];*/

    
}]);