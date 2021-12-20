import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	constructor() {
		this._types = [
			{
				id: 1,
				name: "Холодильники",
				createdAt: "2021-11-17T18:47:33.083Z",
				updatedAt: "2021-11-17T18:47:33.083Z",
			},
			{
				id: 2,
				name: "Телевизоры",
				createdAt: "2021-11-17T18:47:45.374Z",
				updatedAt: "2021-11-17T18:47:45.374Z",
			},
			{
				id: 3,
				name: "Смартфоны",
				createdAt: "2021-11-17T18:47:55.896Z",
				updatedAt: "2021-11-17T18:47:55.896Z",
			},
			{
				id: 5,
				name: "Ноутбуки",
				createdAt: "2021-11-17T18:53:25.490Z",
				updatedAt: "2021-11-17T18:53:25.490Z",
			},
			{
				id: 6,
				name: "Стиральные машины",
				createdAt: "2021-11-19T17:30:41.517Z",
				updatedAt: "2021-11-19T17:30:41.517Z",
			},
			{
				id: 8,
				name: "Наушники",
				createdAt: "2021-11-21T06:54:45.697Z",
				updatedAt: "2021-11-21T06:54:45.697Z",
			},
		];
		this._brands = [
			{
				id: 1,
				name: "Samsung",
				createdAt: "2021-11-17T19:00:04.751Z",
				updatedAt: "2021-11-17T19:00:04.751Z",
			},
			{
				id: 2,
				name: "Apple",
				createdAt: "2021-11-17T19:00:19.030Z",
				updatedAt: "2021-11-17T19:00:19.030Z",
			},
			{
				id: 3,
				name: "Xiaomi",
				createdAt: "2021-11-18T18:14:27.672Z",
				updatedAt: "2021-11-18T18:14:27.672Z",
			},
			{
				id: 4,
				name: "LG",
				createdAt: "2021-11-19T17:20:50.135Z",
				updatedAt: "2021-11-19T17:20:50.135Z",
			},
		];
		this._devices = [
			{
				id: 1,
				name: "iPhone 13 Pro",
				price: 1500,
				rating: 0,
				img: "624b2646-5e30-4945-b457-b4a361a2031a.jpg",
				createdAt: "2021-11-18T17:37:04.878Z",
				updatedAt: "2021-11-18T17:37:04.878Z",
				brandId: 2,
				typeId: 3,
			},
			{
				id: 2,
				name: "Note 11 Pro",
				price: 800,
				rating: 0,
				img: "96de29de-4fbb-4f40-b432-60b6a43c8136.jpg",
				createdAt: "2021-11-18T18:17:28.196Z",
				updatedAt: "2021-11-18T18:17:28.196Z",
				brandId: 3,
				typeId: 3,
			},
			{
				id: 3,
				name: "FORA Xiaomi Mi TV 4S 43",
				price: 500,
				rating: 0,
				img: "72479386-5f88-46e8-8071-4b99f22e44ae.jpg",
				createdAt: "2021-11-18T18:21:57.470Z",
				updatedAt: "2021-11-18T18:21:57.470Z",
				brandId: 3,
				typeId: 2,
			},
			{
				id: 4,
				name: "Холодильник Samsung RB36T774FB1/WT",
				price: 760,
				rating: 0,
				img: "858d9396-d9ce-426f-bc46-ef9d2cc46274.jpg",
				createdAt: "2021-11-18T18:24:16.663Z",
				updatedAt: "2021-11-18T18:24:16.663Z",
				brandId: 1,
				typeId: 1,
			},
			{
				id: 5,
				name: "Стиральная машина LG TW-4V9RW9P",
				price: 960,
				rating: 0,
				img: "ed9b221c-06a9-492e-8e7b-5e8f1f4ff008.jpg",
				createdAt: "2021-11-19T17:31:44.212Z",
				updatedAt: "2021-11-19T17:31:44.212Z",
				brandId: 4,
				typeId: 6,
			},
		];
		this._selectedType = {};
		this._selectedBrand = {};

		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setDevices(devices) {
		this._devices = devices;
	}

	setSelectedType(type) {
		this._selectedType = type;
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand;
	}

	get types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}

	get devices() {
		return this._devices;
	}

	get selectedType() {
		return this._selectedType;
	}

	get selectedBrand() {
		return this._selectedBrand;
	}
}
