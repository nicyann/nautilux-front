angular.module("webInter", ["ngSanitize"])
	.controller("interCtrl", function ($scope, $location) {
		$scope.dossiers = [{
				value: "brouillons",
				label: "Brouillons",
				inters: [{
						id: 1,
						libelle: "Lampadaire clignotte",
						descr: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque at",
						nameInter: "Forges",
						lieu: "rue de la gare",
						date: new Date(2020,04,13),

					},
					{
						id: 2,
						libelle: "ardoises cassées",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga sint",
						nameInter: "Bernard",
						lieu: "3 rue du cypres",
						date: new Date(2020,04,13),

					},
				]
			},
			{
				value: "Valides",
				label: "Validés",
				inters: [{
						id: 3,
						libelle: "pose velux",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga sint",
						nameInter: "Costard",
						lieu: "11 rue d'ici",
						date: new Date(2020,2,7),

					},
					{
						id: 4,
						libelle: "fuite lavabo",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga sint",
						nameInter: "Forges",
						lieu: "11 rue d'ici",
						date: new Date(2020,2,10),

					},
					{
						id: 5,
						libelle: "Fenetre",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga ",
						nameInter: "Hermendez",
						lieu: "11 rue d'ici",
						date: new Date(2020,2,8),

					},
					{
						id: 6,
						libelle: "Chaussée déformée",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga ",
						nameInter: "Forges",
						lieu: "rue de la gare",
						date: new Date(2020,2,8),

					},
					{
						id: 7,
						libelle: "Abris bus",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit fuga sint?",
						nameInter: "Costard",
						lieu: "12 rue deu coin",
						date: new Date(2020,2,9),

					}
				]
			},
			{
				value: "termine",
				label: "Terminés",
				inters: [{
						id: 8,
						libelle: "Arbustes",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						nameInter: "Forges",
						lieu: "rue de la gare",
						date: new Date(2020,2,4),

					},
					{
						id: 9,
						libelle: "Plantations",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						nameInter: "Costard",
						lieu: "rue de la gare",
						date: new Date(2020,2,3),

					},
					{
						id: 10,
						libelle: "porte école",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						nameInter: "Hermendez",
						lieu: "rue de la gare",
						date: new Date(2020,2,3),

					},
					{
						id: 11,
						libelle: "Salle de sport",
						descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						nameInter: "Costard",
						lieu: "rue de la gare",
						date: new Date(2020,2,1),

					},


				]
			},

		];

		$scope.idNextInter =12;

		$scope.dossierCourant = null;
		$scope.interSelectionne = null;

		$scope.versInter = function (dossier, inter) {
			$location.path("/" + dossier.value + "/" + inter.id);
		}


		$scope.selectionDossier = function (dossier) {
			$scope.dossierCourant = dossier;
			$scope.interSelectionne = null;

		}

		$scope.selectionInter = function (inter) {
			$scope.interSelectionne = inter;

		};

		// TRI

		$scope.champTri = null;
		$scope.triDescendant = false;
		$scope.triParInters = function (champ) {
			if ($scope.champTri = champ) {
				$scope.triDescendant = !$scope.triDescendant;
			} else {
				$scope.champTri = champ;
				$scope.triDescendant = false;
			}
		};

		$scope.cssChevronTri = function (champ) {
			return {
				fas: $scope.champTri == champ,
				'fa-sort-up': $scope.champTri == champ && !$scope.triDescendant,
				'fa-sort-down': $scope.champTri == champ && $scope.triDescendant
			};
			
		}

		// Creation nouvelle intervention

		$scope.newInter = null;

		$scope.envoiInter = function() {
			$scope.dossiers.forEach(function(item) {
				if (item.value == "brouillons") {
					$scope.newInter.id = $scope.idNextInter++;
					item.inters.push($scope.newInter);
					$scope.newInter = null;
					$scope.path("/");
				}
			}
			)}





		// $scope.triParNameInter = function () {
		// 	if ($scope.champTri = "nameInter") {
		// 		$scope.triDescendant = !$scope.triDescendant;
		// 	} else {
		// 		$scope.champTri = "nameInter";
		// 		$scope.triDescendant = false;

		// 	}
		// }

		$scope.$watch(function () {
			return $location.path();
		}, function (newPath) {
			var tabPath = newPath.split("/");
			if (tabPath.length > 1) {
				var valDossier = tabPath[1];
				$scope.dossiers.forEach(function (item) {
					if (item.value == valDossier) {
						$scope.selectionDossier(item);
					}
				});
				if (tabPath.length > 2) {
					var idInter = tabPath[2];
					$scope.dossierCourant.inters.forEach(function (item) {
						if (item.id == idInter) {
							$scope.selectionInter(item);
						}
					});
				}
			}

		});



	});




var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', ['$scope', function ($scope) {
	$scope.name = 'world';

}]);