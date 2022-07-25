import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavComponent implements OnInit {

  view = {
    "modality": "NM",
    "protocolName": "Bone Scan",
    "technicalSettingUid": "043feb84-0653-4532-85fe-011622798dda",
    "viewModelVersion": "1.0",
    "viewModel": [
        { 
            "scanName": "FLOW",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        },
        { 
            "scanName": "Bloodpool",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        },
        { 
            "scanName": "WB",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        },
        { 
            "scanName": "SPOT",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        },
        { 
            "scanName": "Tomo H",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        },
        { 
            "scanName": "Tomo L",
            "view": {
                "keyParams": [
                    {
                        "id": "DETECTOR_SETTINGS",
                        "name": "DETECTOR_SETTINGS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "DETECTOR_ONE",
                                "name": "DETECTOR_ONE",
                                "value": "FLOW ANT",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det0"
                            },
                            {
                                "id": "DETECTOR_TWO",
                                "name": "DETECTOR_TWO",
                                "value": "FLOW POST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "det1"
                            }
                        ]
                    }
                ],
                "locationParams": [
                    {
                        "id": "SCAN_LOCATION",
                        "name": "SCAN_LOCATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "PATIENT_LOCATION",
                                "name": "PATIENT_LOCATION",
                                "value": "HEAD FIRST",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "MODE",
                                "name": "MODE",
                                "value": "H",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "START_ANGLE",
                                "name": "START_ANGLE",
                                "value": "0",
                                "unit": "degree",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "BODY_CONTOUR",
                                "name": "BODY_CONTOUR",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            }
                        ]
                    },
                    {
                        "id": "TABLE",
                        "name": "TABLE",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "HEIGHT",
                                "name": "HEIGHT",
                                "value": "Absolute",
                                "unit": "",
                                "category": "attribute",
                                "tag": "gantry"
                            },
                            {
                                "id": "MATRIX",
                                "name": "MATRIX",
                                "value": "128*128",
                                "unit": "",
                                "category": "attribute",
                                "tag": "image"
                            },
                            {
                                "id": "ROTATION",
                                "name": "ROTATION",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "ZOOM",
                                "name": "ZOOM",
                                "value": "true",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANX",
                                "name": "PANX",
                                "value": "90",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            },
                            {
                                "id": "PANY",
                                "name": "PANY",
                                "value": "0",
                                "unit": "",
                                "category": "attribute",
                                "tag": "transParams"
                            }
                        ]
                    }
                ],
                "adminParams": [
                    {
                        "id": "IMAGE_ORIENTATION",
                        "name": "IMAGE_ORIENTATION",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "BODY_PART",
                                "name": "BODY_PART",
                                "value": "Chest",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "BODY_SIDE",
                                "name": "BODY_SIDE",
                                "value": "Left",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            },
                            {
                                "id": "ANATOMIC_REF",
                                "name": "ANATOMIC_REF",
                                "value": "",
                                "unit": "",
                                "category": "attribute",
                                "tag": "admin"
                            }
                        ]
                    }
                ],
                "correctionParams": [
                    {
                        "id": "CORRECTIONS",
                        "name": "CORRECTIONS",
                        "type": "flatCollection",
                        "attributeList": [
                            {
                                "id": "ENERGY_SESSION",
                                "name": "ENERGY_SESSION",
                                "value": "Tc99m",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            },
                            {
                                "id": "SELECTED_COLLIMATOR",
                                "name": "SELECTED_COLLIMATOR",
                                "value": "LEHR",
                                "unit": "",
                                "category": "attribute",
                                "tag": "energy"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "options": [],
    "warnings": {},
    "errorMessage": "",
    "statusCode": 200,
    "success": true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
