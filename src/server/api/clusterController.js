import db from '../dbmodels';

export const getClusterList = async (req, res, next) => {
  try {
    const { query = {} } = req;
    // if (!req.query.order) {
    //   query = { ...query, order: [['order', 'ASC']] };
    // }

    query.limit = 200;
    const clusterList = [{ clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac', blockIds: '15SM62030088,15SM62030093,17SM37100002,17SM37100005' }, { clusterId: '000533c2-6324-45e4-52cb-0894ef22c079', blockIds: 'J31D99K,J31D99P,J31D99R,J31D99T,J31D99W' }, { clusterId: '0005620d-12f6-900c-0000-000000006714', blockIds: '15SM35160062,15SM35420136,16SM6B500044,17SM6B150283' }, { clusterId: '000562f7-1d2d-654d-7c54-246e96855d58', blockIds: '6XLG8M2,B0ZK0M2,F0RH0M2,F0RK0M2,F0SG0M2' }];
    const result = clusterList;// await db.ClusterList.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};


export const getClusterData = async (req, res, next) => {
  try {
    const { query } = req;
    const { id, blockId } = req.params;
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    const where = {
      date: {
        $between: [date, new Date()],
      },
      clusterId: id,
      blockId,
    };
    query.where = where;
    query.order = [['date', 'ASC']];
    console.log(query);
    // const result = await db.ClusterData.findAll(query);
    const result = [
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2017-10-01',
        caseCount: 1,
        escalationCount: null,
        caseData: null,
        escalationData: null,
        softwareItems: null,
        hardwareItems:
          'Date : \nBIOS Version : 3.0b (2017-10-19)\nBMC Version : 3.4 (2017-10-21)\nSatadom Firmware : 1203 (2017-10-23)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2017-11-01',
        caseCount: 2,
        escalationCount: null,
        caseData:
          'Date : 2017-11-08\nCase Number : 00241652\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : prism warning false positive\nResolution : + Customer noticed that the alert did not show up again and will reach out to Nutanix Support if the...\n\nDate : 2017-11-09\nCase Number : 00242365\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Disk Space Usage on CVM Exceeds 90%\nResolution : /home directory at 95% disk usage. Issue with an old 14 GB NCC log file dating back to May 22nd.  Fi...\n',
        escalationData: null,
        softwareItems:
          'Date : \nHypervisor Version : VMware 6.0.0-6921384 (2017-11-09)',
        hardwareItems: null,
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2017-12-01',
        caseCount: null,
        escalationCount: null,
        caseData: null,
        escalationData: null,
        softwareItems: null,
        hardwareItems: 'Date : \nDisk Firmware : 5DV10270 (Loc:3) (2017-12-03)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-01-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-01-31\nCase Number : 00278985\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : 959865110 | Missing an XC730 License\nResolution : engaged w/ OEM to help audit licenses  XC730-16G  resolved that no missing licenses - all purchased ...\n',
        escalationData: null,
        softwareItems: null,
        hardwareItems:
          'Date : \nBios Version : 3.0b (2018-01-05)\nDisk Firmware : SN05 (Loc:5) (2018-01-15)\nSatadom Firmware : S170 (2018-01-21)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-02-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-02-25\nCase Number : 00290025\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Licensing process for the cluster with Ultimate license is incomplete.\nResolution : -Took WebEx with the customer-Deleted cluster uuid 000562f7-1d2d-654d-7c54-246e96855d58 in SFDC-Re-l...\n',
        escalationData: null,
        softwareItems:
          'Date : \nAOS Version : 5.5 (2018-02-04)\nDedup : Enabled (2018-02-04)\nNCC Version : 3.5.0.3-753d7d32 (2018-02-09)\n# of PDs : 4 (2018-02-09)',
        hardwareItems: 'Date : \nBios Version : G4G5T-3.0 (2018-02-04)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-03-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-03-13\nCase Number : 00297857\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Testing out XTract to prepare our VMWare to AHV migration later this year.  Unable to discover VMs with out of date VMTools\nResolution : Vcenter admin account credentials were changed. Removed and re-added the source Environment/VCenter ...\n',
        escalationData: null,
        softwareItems:
          'Date : \nErasure Coding : Enabled (2018-03-14)\nMetro Availability : Enabled (2018-03-14)\nCompression : Disabled (2018-03-22)',
        hardwareItems: null,
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-04-01',
        caseCount: 3,
        escalationCount: null,
        caseData:
          "Date : 2018-04-16\nCase Number : 00313062\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Xtract VM Error\nResolution : Problem observed:++ Customer performed Xtract migration++ Domain controller VM and DHCP VM failed be...\n\nDate : 2018-04-19\nCase Number : 00314901\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : 66 Nodes - Move, Split and Re-IP hosts and CVM's, run updates, etc\nResolution : No answer from customer/DELL.Provided below feedback, never heard back from parties.>>> We do have d...\n",
        escalationData: null,
        softwareItems: 'Date : \nAOS Version : 5.5.0.7 (2018-04-15)',
        hardwareItems: null,
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-05-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-05-14\nCase Number : 00326635\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Need to setup a Webex with Support to go over requirements and steps needed for proper import of machine images in to PRISM\nResolution : How to migrate VMs from ESXi to AHV.  Created a temp container on the AHV cluster, mounted it on ESX...\n',
        escalationData: null,
        softwareItems: null,
        hardwareItems:
          'Date : \nDisk Firmware : SN02 (Loc:2) (2018-05-04)\nDisk Firmware : SN03 (Loc:6) (2018-05-04)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-06-01',
        caseCount: null,
        escalationCount: null,
        caseData: null,
        escalationData: null,
        softwareItems: null,
        hardwareItems: 'Date : \nBMC Version : 3.56 (2018-06-12)',
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-07-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-07-18\nCase Number : 00358358\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : License Reclaim Fails\nResolution : Issue : Customer would like to reclaim licenseSolution : Manually resclaimed UUID 000562f7-1d2d-654d...\n',
        escalationData: null,
        softwareItems: null,
        hardwareItems: null,
      },
      {
        clusterId: '00050ee8-b1fe-d03e-0000-0000000051ac',
        blockId: '15SM62030088',
        date: '2018-08-01',
        caseCount: 1,
        escalationCount: null,
        caseData:
          'Date : 2018-08-12\nCase Number : 00370912\nEscalation Status : Not escalated\nDispatch Count : 0\nSubject : Cluster CVMs hung up during cluster start\nResolution : - Found ntp sever was not reachable. - Customer is running AOS 5.6 and we have a known issue KB 5515...\n',
        escalationData: null,
        softwareItems: null,
        hardwareItems:
          'Date : \nBios Version : 3.0b (2018-08-01)\nBMC Version : 3.4 (2018-08-12)',
      },
    ];

    res.json(result);
  } catch (err) {
    next(err);
  }
};


export const getTestData = async (req, res, next) => {
  try {
    const { query } = req;
    // console.log('db objects', db, '\n');
    const result = await db.TestData.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

