import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nm-viewer',
  templateUrl: './nmViewer.component.html',
  styleUrls: ['./nmViewer.component.css']
})

export class NMViewerComponent implements OnInit{

  leftNavData;
  scanData;

  viewData = {
    "modality": "NM",
    "protocolName": "Bone Scan",
    "technicalSettingUid": "043feb84-0653-4532-85fe-011622798dda",
    "viewModelVersion": "1.0",
    "viewModel": [
        { 
            "scanName": "FLOW",
            "view": [
              {
                "name": "Key Parameters",
                "collection":  [
                  {
                      "id": "DETECTOR_SETTINGS",
                      "name": "Detector Settings",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "DETECTOR_ONE",
                              "name": "Detector 1",
                              "value": "FLOW ANT",
                              "unit": "",
                              "category": "attribute",
                              "tag": "det0"
                          },
                          {
                              "id": "DETECTOR_TWO",
                              "name": "Detector 2",
                              "value": "FLOW POST",
                              "unit": "",
                              "category": "attribute",
                              "tag": "det1"
                          }
                      ]
                  },
                  {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                }
                 ]
              },
              {
                "name": "Location Parameters",
                "collection": [
                  {
                      "id": "SCAN_LOCATION",
                      "name": "Scan Location",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "PATIENT_LOCATION",
                              "name": "Patient location",
                              "value": "HEAD FIRST",
                              "unit": "",
                              "category": "attribute",
                              "tag": "image"
                          },
                          {
                              "id": "MODE",
                              "name": "Mode",
                              "value": "H",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "START_ANGLE",
                              "name": "Start angle",
                              "value": "0",
                              "unit": "degree",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "BODY_CONTOUR",
                              "name": "Body contour",
                              "value": "true",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          }
                      ]
                  },
                  {
                      "id": "TABLE",
                      "name": "Table",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "HEIGHT",
                              "name": "Height",
                              "value": "Absolute",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "MATRIX",
                              "name": "Matrix",
                              "value": "128*128",
                              "unit": "",
                              "category": "attribute",
                              "tag": "image"
                          },
                          {
                              "id": "ROTATION",
                              "name": "Rotation",
                              "value": "0",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "ZOOM",
                              "name": "Zoom",
                              "value": "true",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "PANX",
                              "name": "PanX",
                              "value": "90",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "PANY",
                              "name": "PanY",
                              "value": "0",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          }
                      ]
                  }
                 ]
              },
              {
                "name": "Admin Parameters",
                "collection": [
                  {
                      "id": "IMAGE_ORIENTATION",
                      "name": "Image Orientation",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "BODY_PART",
                              "name": "Body part",
                              "value": "Chest",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          },
                          {
                              "id": "BODY_SIDE",
                              "name": "Body side",
                              "value": "Left",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          },
                          {
                              "id": "ANATOMIC_REF",
                              "name": "Anatomic Ref",
                              "value": "",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          }
                      ]
                  }
                 ]
              },
              {
                "name": "Correction Parameters",
                "collection": [
                  {
                      "id": "CORRECTIONS",
                      "name": "Corrections",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "ENERGY_SESSION",
                              "name": "Energy Session",
                              "value": "Tc99m",
                              "unit": "",
                              "category": "attribute",
                              "tag": "energy"
                          },
                          {
                              "id": "SELECTED_COLLIMATOR",
                              "name": "Selected collimator",
                              "value": "LEHR",
                              "unit": "",
                              "category": "attribute",
                              "tag": "energy"
                          }
                      ]
                  }
                 ]
              }
            ]
        },
        { 
            "scanName": "Bloodpool",
            "view": [
              {
                "name": "BKey Parameters",
                "collection":  [
                  {
                      "id": "DETECTOR_SETTINGS",
                      "name": "Detector Settings",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "DETECTOR_ONE",
                              "name": "Detector 1",
                              "value": "FLOW ANT",
                              "unit": "",
                              "category": "attribute",
                              "tag": "det0"
                          },
                          {
                              "id": "DETECTOR_TWO",
                              "name": "Detector 2",
                              "value": "FLOW POST",
                              "unit": "",
                              "category": "attribute",
                              "tag": "det1"
                          }
                      ]
                  },
                  {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                }
                 ]
              },
              {
                "name": "Location Parameters",
                "collection": [
                  {
                      "id": "SCAN_LOCATION",
                      "name": "Scan Location",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "PATIENT_LOCATION",
                              "name": "Patient location",
                              "value": "HEAD FIRST",
                              "unit": "",
                              "category": "attribute",
                              "tag": "image"
                          },
                          {
                              "id": "MODE",
                              "name": "Mode",
                              "value": "H",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "START_ANGLE",
                              "name": "Start angle",
                              "value": "0",
                              "unit": "degree",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "BODY_CONTOUR",
                              "name": "Body contour",
                              "value": "true",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          }
                      ]
                  },
                  {
                      "id": "TABLE",
                      "name": "Table",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "HEIGHT",
                              "name": "Height",
                              "value": "Absolute",
                              "unit": "",
                              "category": "attribute",
                              "tag": "gantry"
                          },
                          {
                              "id": "MATRIX",
                              "name": "Matrix",
                              "value": "128*128",
                              "unit": "",
                              "category": "attribute",
                              "tag": "image"
                          },
                          {
                              "id": "ROTATION",
                              "name": "Rotation",
                              "value": "0",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "ZOOM",
                              "name": "Zoom",
                              "value": "true",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "PANX",
                              "name": "PanX",
                              "value": "90",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          },
                          {
                              "id": "PANY",
                              "name": "PanY",
                              "value": "0",
                              "unit": "",
                              "category": "attribute",
                              "tag": "transParams"
                          }
                      ]
                  }
                 ]
              },
              {
                "name": "Admin Parameters",
                "collection": [
                  {
                      "id": "IMAGE_ORIENTATION",
                      "name": "Image Orientation",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "BODY_PART",
                              "name": "Body part",
                              "value": "Chest",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          },
                          {
                              "id": "BODY_SIDE",
                              "name": "Body side",
                              "value": "Left",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          },
                          {
                              "id": "ANATOMIC_REF",
                              "name": "Anatomic Ref",
                              "value": "",
                              "unit": "",
                              "category": "attribute",
                              "tag": "admin"
                          }
                      ]
                  }
                 ]
              },
              {
                "name": "Correction Parameters",
                "collection": [
                  {
                      "id": "CORRECTIONS",
                      "name": "Corrections",
                      "type": "flatCollection",
                      "attributeList": [
                          {
                              "id": "ENERGY_SESSION",
                              "name": "Energy Session",
                              "value": "Tc99m",
                              "unit": "",
                              "category": "attribute",
                              "tag": "energy"
                          },
                          {
                              "id": "SELECTED_COLLIMATOR",
                              "name": "Selected collimator",
                              "value": "LEHR",
                              "unit": "",
                              "category": "attribute",
                              "tag": "energy"
                          }
                      ]
                  }
                 ]
              }
            ]
        },
        { 
          "scanName": "WB",
          "view": [
            {
              "name": "Key Parameters",
              "collection":  [
                {
                    "id": "DETECTOR_SETTINGS",
                    "name": "Detector Settings",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "DETECTOR_ONE",
                            "name": "Detector 1",
                            "value": "FLOW ANT",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det0"
                        },
                        {
                            "id": "DETECTOR_TWO",
                            "name": "Detector 2",
                            "value": "FLOW POST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det1"
                        }
                    ]
                },
                {
                  "id": "SCAN_LOCATION",
                  "name": "Scan Location",
                  "type": "flatCollection",
                  "attributeList": [
                      {
                          "id": "PATIENT_LOCATION",
                          "name": "Patient location",
                          "value": "HEAD FIRST",
                          "unit": "",
                          "category": "attribute",
                          "tag": "image"
                      },
                      {
                          "id": "MODE",
                          "name": "Mode",
                          "value": "H",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "START_ANGLE",
                          "name": "Start angle",
                          "value": "0",
                          "unit": "degree",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "BODY_CONTOUR",
                          "name": "Body contour",
                          "value": "true",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      }
                  ]
              }
               ]
            },
            {
              "name": "Location Parameters",
              "collection": [
                {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                },
                {
                    "id": "TABLE",
                    "name": "Table",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "HEIGHT",
                            "name": "Height",
                            "value": "Absolute",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "MATRIX",
                            "name": "Matrix",
                            "value": "128*128",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "ROTATION",
                            "name": "Rotation",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "ZOOM",
                            "name": "Zoom",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANX",
                            "name": "PanX",
                            "value": "90",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANY",
                            "name": "PanY",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Admin Parameters",
              "collection": [
                {
                    "id": "IMAGE_ORIENTATION",
                    "name": "Image Orientation",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "BODY_PART",
                            "name": "Body part",
                            "value": "Chest",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "BODY_SIDE",
                            "name": "Body side",
                            "value": "Left",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "ANATOMIC_REF",
                            "name": "Anatomic Ref",
                            "value": "",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Correction Parameters",
              "collection": [
                {
                    "id": "CORRECTIONS",
                    "name": "Corrections",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "ENERGY_SESSION",
                            "name": "Energy Session",
                            "value": "Tc99m",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        },
                        {
                            "id": "SELECTED_COLLIMATOR",
                            "name": "Selected collimator",
                            "value": "LEHR",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        }
                    ]
                }
               ]
            }
          ]
        },
        { 
          "scanName": "SPOT",
          "view": [
            {
              "name": "BKey Parameters",
              "collection":  [
                {
                    "id": "DETECTOR_SETTINGS",
                    "name": "Detector Settings",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "DETECTOR_ONE",
                            "name": "Detector 1",
                            "value": "FLOW ANT",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det0"
                        },
                        {
                            "id": "DETECTOR_TWO",
                            "name": "Detector 2",
                            "value": "FLOW POST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det1"
                        }
                    ]
                },
                {
                  "id": "SCAN_LOCATION",
                  "name": "Scan Location",
                  "type": "flatCollection",
                  "attributeList": [
                      {
                          "id": "PATIENT_LOCATION",
                          "name": "Patient location",
                          "value": "HEAD FIRST",
                          "unit": "",
                          "category": "attribute",
                          "tag": "image"
                      },
                      {
                          "id": "MODE",
                          "name": "Mode",
                          "value": "H",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "START_ANGLE",
                          "name": "Start angle",
                          "value": "0",
                          "unit": "degree",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "BODY_CONTOUR",
                          "name": "Body contour",
                          "value": "true",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      }
                  ]
              }
               ]
            },
            {
              "name": "Location Parameters",
              "collection": [
                {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                },
                {
                    "id": "TABLE",
                    "name": "Table",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "HEIGHT",
                            "name": "Height",
                            "value": "Absolute",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "MATRIX",
                            "name": "Matrix",
                            "value": "128*128",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "ROTATION",
                            "name": "Rotation",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "ZOOM",
                            "name": "Zoom",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANX",
                            "name": "PanX",
                            "value": "90",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANY",
                            "name": "PanY",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Admin Parameters",
              "collection": [
                {
                    "id": "IMAGE_ORIENTATION",
                    "name": "Image Orientation",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "BODY_PART",
                            "name": "Body part",
                            "value": "Chest",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "BODY_SIDE",
                            "name": "Body side",
                            "value": "Left",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "ANATOMIC_REF",
                            "name": "Anatomic Ref",
                            "value": "",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Correction Parameters",
              "collection": [
                {
                    "id": "CORRECTIONS",
                    "name": "Corrections",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "ENERGY_SESSION",
                            "name": "Energy Session",
                            "value": "Tc99m",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        },
                        {
                            "id": "SELECTED_COLLIMATOR",
                            "name": "Selected collimator",
                            "value": "LEHR",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        }
                    ]
                }
               ]
            }
          ]
        },
        { 
          "scanName": "Tomo H",
          "view": [
            {
              "name": "Key Parameters",
              "collection":  [
                {
                    "id": "DETECTOR_SETTINGS",
                    "name": "Detector Settings",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "DETECTOR_ONE",
                            "name": "Detector 1",
                            "value": "FLOW ANT",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det0"
                        },
                        {
                            "id": "DETECTOR_TWO",
                            "name": "Detector 2",
                            "value": "FLOW POST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det1"
                        }
                    ]
                },
                {
                  "id": "SCAN_LOCATION",
                  "name": "Scan Location",
                  "type": "flatCollection",
                  "attributeList": [
                      {
                          "id": "PATIENT_LOCATION",
                          "name": "Patient location",
                          "value": "HEAD FIRST",
                          "unit": "",
                          "category": "attribute",
                          "tag": "image"
                      },
                      {
                          "id": "MODE",
                          "name": "Mode",
                          "value": "H",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "START_ANGLE",
                          "name": "Start angle",
                          "value": "0",
                          "unit": "degree",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "BODY_CONTOUR",
                          "name": "Body contour",
                          "value": "true",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      }
                  ]
              }
               ]
            },
            {
              "name": "Location Parameters",
              "collection": [
                {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                },
                {
                    "id": "TABLE",
                    "name": "Table",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "HEIGHT",
                            "name": "Height",
                            "value": "Absolute",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "MATRIX",
                            "name": "Matrix",
                            "value": "128*128",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "ROTATION",
                            "name": "Rotation",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "ZOOM",
                            "name": "Zoom",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANX",
                            "name": "PanX",
                            "value": "90",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANY",
                            "name": "PanY",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Admin Parameters",
              "collection": [
                {
                    "id": "IMAGE_ORIENTATION",
                    "name": "Image Orientation",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "BODY_PART",
                            "name": "Body part",
                            "value": "Chest",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "BODY_SIDE",
                            "name": "Body side",
                            "value": "Left",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "ANATOMIC_REF",
                            "name": "Anatomic Ref",
                            "value": "",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Correction Parameters",
              "collection": [
                {
                    "id": "CORRECTIONS",
                    "name": "Corrections",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "ENERGY_SESSION",
                            "name": "Energy Session",
                            "value": "Tc99m",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        },
                        {
                            "id": "SELECTED_COLLIMATOR",
                            "name": "Selected collimator",
                            "value": "LEHR",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        }
                    ]
                }
               ]
            }
          ]
        },
      { 
          "scanName": "Tomo L",
          "view": [
            {
              "name": "BKey Parameters",
              "collection":  [
                {
                    "id": "DETECTOR_SETTINGS",
                    "name": "Detector Settings",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "DETECTOR_ONE",
                            "name": "Detector 1",
                            "value": "FLOW ANT",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det0"
                        },
                        {
                            "id": "DETECTOR_TWO",
                            "name": "Detector 2",
                            "value": "FLOW POST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "det1"
                        }
                    ]
                },
                {
                  "id": "SCAN_LOCATION",
                  "name": "Scan Location",
                  "type": "flatCollection",
                  "attributeList": [
                      {
                          "id": "PATIENT_LOCATION",
                          "name": "Patient location",
                          "value": "HEAD FIRST",
                          "unit": "",
                          "category": "attribute",
                          "tag": "image"
                      },
                      {
                          "id": "MODE",
                          "name": "Mode",
                          "value": "H",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "START_ANGLE",
                          "name": "Start angle",
                          "value": "0",
                          "unit": "degree",
                          "category": "attribute",
                          "tag": "gantry"
                      },
                      {
                          "id": "BODY_CONTOUR",
                          "name": "Body contour",
                          "value": "true",
                          "unit": "",
                          "category": "attribute",
                          "tag": "gantry"
                      }
                  ]
              }
               ]
            },
            {
              "name": "Location Parameters",
              "collection": [
                {
                    "id": "SCAN_LOCATION",
                    "name": "Scan Location",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "PATIENT_LOCATION",
                            "name": "Patient location",
                            "value": "HEAD FIRST",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "MODE",
                            "name": "Mode",
                            "value": "H",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "START_ANGLE",
                            "name": "Start angle",
                            "value": "0",
                            "unit": "degree",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "BODY_CONTOUR",
                            "name": "Body contour",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        }
                    ]
                },
                {
                    "id": "TABLE",
                    "name": "Table",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "HEIGHT",
                            "name": "Height",
                            "value": "Absolute",
                            "unit": "",
                            "category": "attribute",
                            "tag": "gantry"
                        },
                        {
                            "id": "MATRIX",
                            "name": "Matrix",
                            "value": "128*128",
                            "unit": "",
                            "category": "attribute",
                            "tag": "image"
                        },
                        {
                            "id": "ROTATION",
                            "name": "Rotation",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "ZOOM",
                            "name": "Zoom",
                            "value": "true",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANX",
                            "name": "PanX",
                            "value": "90",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        },
                        {
                            "id": "PANY",
                            "name": "PanY",
                            "value": "0",
                            "unit": "",
                            "category": "attribute",
                            "tag": "transParams"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Admin Parameters",
              "collection": [
                {
                    "id": "IMAGE_ORIENTATION",
                    "name": "Image Orientation",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "BODY_PART",
                            "name": "Body part",
                            "value": "Chest",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "BODY_SIDE",
                            "name": "Body side",
                            "value": "Left",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        },
                        {
                            "id": "ANATOMIC_REF",
                            "name": "Anatomic Ref",
                            "value": "",
                            "unit": "",
                            "category": "attribute",
                            "tag": "admin"
                        }
                    ]
                }
               ]
            },
            {
              "name": "Correction Parameters",
              "collection": [
                {
                    "id": "CORRECTIONS",
                    "name": "Corrections",
                    "type": "flatCollection",
                    "attributeList": [
                        {
                            "id": "ENERGY_SESSION",
                            "name": "Energy Session",
                            "value": "Tc99m",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        },
                        {
                            "id": "SELECTED_COLLIMATOR",
                            "name": "Selected collimator",
                            "value": "LEHR",
                            "unit": "",
                            "category": "attribute",
                            "tag": "energy"
                        }
                    ]
                }
               ]
            }
          ]
      }
    ],
    "options": [],
    "warnings": {},
    "errorMessage": "",
    "statusCode": 200,
    "success": true
  };

  ngOnInit(): void {
    this.leftNavData = this.viewData.viewModel.map((scan) =>  {return {'scanName': scan.scanName}});
    this.setMiddleSectionScanData(0);
  }

  updateSelectedScan(event) {
    console.log('NM Viewer component ' +  event);
    this.setMiddleSectionScanData(event);
  }

  setMiddleSectionScanData(scanIndex: number) {
    this.scanData = this.viewData.viewModel[scanIndex];  
  }
  
}