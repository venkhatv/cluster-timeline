const clusterData = [{
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/08/2017',
  year: 2017,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/09/2017',
  year: 2017,
  caseCount: 1,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/10/2017',
  year: 2017,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [

  ],
  softwareDetails: [],
  hardwareItems: [
  ],
  hardwareDetails: [],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/11/2017',
  year: 2017,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/12/2017',
  year: 2017,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/01/2018',
  year: 2018,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/02/2018',
  year: 2018,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/03/2018',
  year: 2018,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/04/2018',
  year: 2018,
  caseCount: 2,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [

  ],
  softwareDetails: [
  ],
  hardwareItems: [
  ],
  hardwareDetails: [],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/05/2018',
  year: 2018,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [
    'Nic: Version: 5.4.0',
    'Async Dr: Enabled',
  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [
    'BMC Version: 5.4.0',
  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/06/2018',
  year: 2018,
  caseCount: 1,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [

  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [

  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}, {
  clusterId: 'ABC',
  blockId: 'Block 123',
  date: '01/07/2018',
  year: 2018,
  caseCount: 4,
  caseData: [{
    subject: 'Not booting up',
    createdDate: '08/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Failing',
    createdDate: '09/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '10/08/2017',
    resolution: 'Power failure',
  }, {
    subject: 'Not booting up',
    createdDate: '11/08/2017',
    resolution: 'Power failure',
  }],
  dispatchCount: 2,
  dispatchData: [{
    subject: 'Random dispatch',
    createdDate: '08/08/2017',
    description: 'some random disptach',
  }, {
    subject: 'Random dispatch 2',
    createdDate: '11/08/2017',
    description: 'some random disptach 2',
  }],
  softwareItems: [

  ],
  softwareDetails: [{
    Name: 'Nic',
    ReleaseVersion: '5.4.0',
    InstalledDate: '02/08/2017',
  }, {
    Feature: 'Async Dr',
    Activity: 'Enabled',
    Date: '23/07/2018',
  }],
  hardwareItems: [

  ],
  hardwareDetails: [{
    OSversion: 'AOS 5.4',
    issue: 'Boom',
    resolution: 'Resolved',
  }],

}];


export default clusterData;
