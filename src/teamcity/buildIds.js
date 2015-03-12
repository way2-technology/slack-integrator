module.exports = {
  'Drivers.ION': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Ion_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Ziv': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_ZIV_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.SL7000': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_SL7000_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Q1000': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Q1000_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Nexus': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Nexus_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.E3': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_E3_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Ansi': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Ansi_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Cylec': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Cylec_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Integracao.Wits': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Wits_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Drivers.Tekpea': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Tekpea_Ci',
      'buildBranch': '<default>'
    },
  ],
  'Way2 Abnt': [
    {
      'branchDefinition': 'default',
      'buildId': 'Drivers_Abnt_Ci',
      'buildBranch': '<default>'
    },
    {
      'branchDefinition': '.net4',
      'buildId': 'Drivers_AbntNet4_Ci',
      'buildBranch': '<default>'
    }
  ],
  'Manager': [
    {
      'branchDefinition': 'default',
      'buildId': 'PlataformaDeColeta_Manager_Release',
      'buildBranch': '<default>'
    },
    {
      'branchDefinition': '%sprint.branch%',
      'buildId': 'PlataformaDeColeta_Manager_SprintCi',
      'buildBranch': '<default>'
    }
  ],
  'PlataformaDeColeta.Coletor': [
    {
      'branchDefinition': 'default',
      'buildId': 'PlataformaDeColeta_Coletor_Release',
      'buildBranch': '<default>'
    },
    {
      'branchDefinition': '%sprint.branch%',
      'buildId': 'PlataformaDeColeta_Coletor_SprintCi',
      'buildBranch': '<default>'
    }
  ],
  'PlataformaDeColeta': [
    {
      'branchDefinition': 'default',
      'buildId': 'PlataformaDeColeta_Common_Release',
      'buildBranch': '<default>'
    },
    {
      'branchDefinition': '%sprint.branch%',
      'buildId': 'PlataformaDeColeta_Common_SprintCi',
      'buildBranch': '<default>'
    },
    {
      'branchDefinition': /^#\d{4}$/,
      'buildId': 'PlataformaDeColeta_Common_Issue',
      'buildBranch': ''
    }
  ]
}
